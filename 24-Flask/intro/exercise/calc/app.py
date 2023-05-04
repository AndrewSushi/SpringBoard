# Put your app in here.
from flask import Flask, request
from operations import *

app = Flask(__name__)

@app.route("/add")
def _add():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = add(a, b)
    return str(res)

@app.route("/sub")
def _sub():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = sub(a, b)
    return str(res)

@app.route("/mult")
def _mult():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = mult(a, b)
    return str(res)

@app.route("/div")
def _div():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = div(a, b)
    return str(res)

ops = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route("/math/<op>")
def doMath(op):
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = ops[op](a, b)
    return str(res)