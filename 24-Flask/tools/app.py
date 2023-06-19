from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "Sushi88"
debug = DebugToolbarExtension(app)

MOVIES = {"Ip Man", "John Wick", "Train to Busan"}

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/movies')
def movies():
    return render_template("movies.html", movies=MOVIES)

@app.route('/movies/json')
def get_movies_json():
    # return '{"Guardians of the Galaxy": {"year": 2014}}'
    json_obj = jsonify(list(MOVIES))
    return json_obj

@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']
    # Add to Pretend DB
    if title in MOVIES:
        flash("Move Already Exists!")
    else:
        MOVIES.append(title)
        flash("Created Your Movie")
    return redirect("/movies")