from flask import Flask, render_template, redirect, request, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "SUSHI"


@app.route('/')
def root():
    return render_template('home.html', survey=satisfaction_survey)

@app.route('/start')
def start():
    session["responses"] = []
    return redirect("/questions/0")

@app.route('/questions/<int:question>')
def questions(question):
    responses = session.get("responses")
    if responses is None:
        return redirect("/")
    if len(responses) == len(satisfaction_survey.questions):
        return redirect("/finish")
    if len(responses) != question:
        flash("Invalid Question")
        return redirect(f"/questions/{len(responses)}")
    next_question = satisfaction_survey.questions[question]
    return render_template('questions.html', num=question, question=next_question)

@app.route('/answer')
def answer():
    selection = request.args['answer']
    responses = session["responses"]
    responses.append(selection)
    session['responses'] = responses

    if len(responses) == len(satisfaction_survey.questions):
        return redirect("/finish")
    return redirect(f"/questions/{len(responses)}")

@app.route('/finish')
def finish():
    # print(session)
    return render_template("finish.html")