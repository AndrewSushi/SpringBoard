from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback
from forms import RegisterForm, LoginForm, FeedbackForm

app = Flask(__name__)
app.app_context().push()
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///flask_feedback"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)

toolbar = DebugToolbarExtension(app)

@app.route('/')
def home():
    return redirect('/register')

@app.route('/register', methods=["GET", "POST"])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data
        new_user = User.register(username, password, email, first_name, last_name)
        db.session.add(new_user)
        db.session.commit()
        session['username'] = new_user.username
        return redirect(f'users/{username}')
    else:
        return render_template('register.html', form=form)


@app.route('/login', methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        if user:
            flash(f"Welcome Back, {user.username}", "success")
            session['username'] = user.username
            return redirect(f'users/{user.username}')
        else:
            form.username.errors = ['Invalid username/password']

    return render_template('login.html', form=form)

# @app.route('/secret')
# def secret():
#     if "username" not in session:
#         flash("Please log in first")
#         return redirect('/')
#     if session["username"]:
#         return "You made it!"
#     return redirect('/')

@app.route('/logout')
def logout_user():
    session.pop('username')
    flash("Goodbye")
    return redirect('/')

@app.route('/users/<username>')
def show_user(username):
    if "username" not in session:
        flash("Please log in first")
        return redirect('/')
    user = User.query.get_or_404(username)
    form = FeedbackForm()
    return render_template('user.html', user=user, form=form)


@app.route("/users/<username>/delete", methods=["POST"])
def remove_user(username):
    if "username" not in session:
        raise redirect('/')
    user = User.query.get(username)
    db.session.delete(user)
    db.session.commit()
    session.pop("username")
    return redirect("/login")

@app.route("/users/<username>/feedback/new", methods=["GET", "POST"])
def new_feedback(username):
    if "username" not in session:
        raise redirect('/')

    form = FeedbackForm()
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        feedback = Feedback(title=title, content=content, username=username,)
        db.session.add(feedback)
        db.session.commit()
        return redirect(f"/users/{feedback.username}")
    else:
        return render_template("new_feedback.html", form=form)


@app.route("/feedback/<int:feedback_id>/update", methods=["GET", "POST"])
def update_feedback(feedback_id):
    feedback = Feedback.query.get(feedback_id)
    if "username" not in session:
        raise redirect('/')

    form = FeedbackForm(obj=feedback)

    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data

        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    return render_template("/feedback/edit.html", form=form, feedback=feedback)


@app.route("/feedback/<int:feedback_id>/delete", methods=["POST"])
def delete_feedback(feedback_id):
    feedback = Feedback.query.get(feedback_id)
    if "username" not in session:
        raise redirect('/')

    db.session.delete(feedback)
    db.session.commit()
    return redirect(f"/users/{feedback.username}")