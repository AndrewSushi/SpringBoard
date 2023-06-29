"""Blogly application."""

from flask import Flask, render_template, redirect, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag
from datetime import datetime

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "Sushi!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/users')
def get_users():
    users = User.query.order_by(User.id.asc()).all()
    return render_template("users.html", users=users)

@app.route('/users/<int:user_id>')
def show_user(user_id):
    user = User.query.get_or_404(user_id)
    posts = Post.query.filter(Post.user_id == user_id)
    return render_template('user_details.html', user=user, posts=posts)

@app.route('/users/new')
def new_user():
    return render_template('add.html')

@app.route('/users/add', methods=["POST"])
def add_user():
    first_name = request.form["first"]
    last_name = request.form["last"]
    image = request.form["image"]

    new_user = User(first_name=first_name, last_name=last_name, image_url=image)
    db.session.add(new_user)
    db.session.commit()
    return redirect('/')

@app.route('/users/<int:user_id>/edit')
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit_user.html', user=user)

@app.route('/users/<int:user_id>/edit', methods=["POST"])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    user.first_name = user.first_name if request.form["first"] == "" else request.form["first"]
    user.last_name = user.last_name if request.form["last"] == "" else request.form["last"]
    user.image_url = user.image_url if request.form["image"] == "" else request.form["image"]

    db.session.add(user)
    db.session.commit()

    return redirect('/')

@app.route('/users/<int:user_id>/delete')
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/')

# POSTS SECTION

@app.route('/users/<int:user_id>/posts/new', methods=["GET"])
def make_post(user_id):
    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()
    return render_template('new_post.html', user=user, tags=tags)

@app.route('/users/<int:user_id>/posts/new', methods=["POST"])
def add_post(user_id):
    user = User.query.get_or_404(user_id)
    title = request.form["title"]
    content = request.form["content"]
    date = datetime.now()

    new_post = Post(title=title, content=content, created_at=date, user=user)
    db.session.add(new_post)
    db.session.commit()
    return redirect(f'/users/{user_id}')


@app.route('/posts/<int:post_id>')
def show_posts(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('post.html', post=post)

@app.route('/posts/<int:post_id>/edit', methods=["GET"])
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('edit_post.html', post=post)

@app.route('/posts/<int:post_id>/edit', methods=["POST"])
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    post.title = post.title if request.form["title"] == "" else request.form["title"]
    post.content = post.content if request.form["content"] == "" else request.form["content"]
    
    db.session.add(post)
    db.session.commit()
    return redirect(f'/posts/{post_id}')

@app.route('/posts/<int:post_id>/delete')
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return redirect(f"/users/{post.user_id}")

# TAGS

@app.route('/tags')
def get_tags():
    tags = Tag.query.all()
    return render_template('tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def show_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('show_tag.html', tag=tag)

@app.route('/tags/new')
def add_tag():
    return render_template('add_tag.html')

@app.route('/tags/new', methods=["POST"])
def make_tag():
    tag_name = request.form["tag"]
    if not tag_name:
        return redirect('/tags/new')
    
    new_tag = Tag(name=tag_name)
    db.session.add(new_tag)
    db.session.commit()

    return redirect('/tags')

@app.route('/tags/<int:tag_id>/edit', methods=["GET"])
def edit_tag_form(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('edit_tag.html', tag=tag)

@app.route('/tags/<int:tag_id>/edit', methods=["POST"])
def edit_tag(tag_id):
    tag = Tag.query.get(tag_id)
    tag.name = tag.name if request.form["tag"] == None else request.form["tag"]

    db.session.add(tag)
    db.session.commit()
    return redirect(f'/tags/{tag_id}')

@app.route('/tags/<int:tag_id>/delete')
def delete_tag(tag_id):
    tag = Tag.query.get(tag_id)
    db.session.delete(tag)
    db.session.commit()
    return redirect(f"/tags")