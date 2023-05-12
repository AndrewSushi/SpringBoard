from flask import Flask, request, render_template
from random import randint, choice
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sushi'

debug = DebugToolbarExtension(app)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/hello')
def hello():
    return render_template("hello.html")

@app.route('/lucky')
def lucky():
    num = randint(5, 10)
    return render_template("lucky.html", lucky_num=num, msg="You are very lucky")

COMPLIMENTS = ["cool", "awesome", "clever", "tenacious", "pythonic"]

@app.route('/form')
def show_form():
    return render_template("form.html")

@app.route('/greet')
def greet():
    name = request.args["username"]
    nice_thing = choice(COMPLIMENTS)
    return render_template("greet.html", username=name, compliment=nice_thing)

@app.route('/spell/<word>')
def spell(word):
    return render_template('spell_word.html', word=word.upper())

@app.route('/test')
def test():
    return render_template("test.html")

@app.route('/test2')
def test2():
    username = request.args["username"]
    return render_template("test2.html", username=username)

@app.route('/base')
def base():
    return render_template("base.html")