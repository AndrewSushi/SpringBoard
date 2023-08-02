from flask import Flask, render_template

app = Flask(__name__)
app.app_context().push()

@app.route('/')
def home():
    return render_template('index.html')