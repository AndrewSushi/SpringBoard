from flask import Flask, request, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Buddies

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///little_buddies_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "Sushi!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route("/")
def list_buddies():
    buddies = Buddies.query.order_by(Buddies.id.asc()).all()
    return render_template('home.html', buddies=buddies)

@app.route("/", methods=["POST"])
def create_buddy():
    name = request.form["name"]
    color = request.form["color"]
    hunger = request.form["hunger"]
    hunger = int(hunger) if hunger else None

    new_buddy = Buddies(name=name, color=color, hunger=hunger)
    db.session.add(new_buddy)
    db.session.commit()
    return redirect(f"/{new_buddy.id}")


@app.route('/<int:buddy_id>')
def show_buddy(buddy_id):
    buddy = Buddies.query.get_or_404(buddy_id)
    return render_template('details.html', buddy=buddy)

@app.route("/colors/<color_id>")
def show_buddies_by_color(color_id):
    buddies = Buddies.get_by_color(color_id)
    return render_template("color.html", buddies=buddies, color=color_id)

@app.route("/delete/<int:buddy_id>")
def delete_buddy(buddy_id):
    Buddies.query.filter_by(id=int(buddy_id)).delete()
    db.session.commit()
    return redirect("/")