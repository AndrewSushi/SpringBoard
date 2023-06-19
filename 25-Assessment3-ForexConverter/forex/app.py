from flask import Flask, render_template, request
import requests

url = 'https://api.exchangerate.host/latest'
response = requests.get(url)
data = response.json()
currencies = data["rates"]

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/convert')
def convert():
    from_currency = request.args.get("from")
    to_currency = request.args.get("to")
    amount = request.args.get("amount")

    invalids = []
    if not amount.isdigit():
        invalids.append('amount.')
    if from_currency is None or from_currency not in currencies:
        invalids.append(f'code: {from_currency}')
    if to_currency is None or to_currency not in currencies:
        invalids.append(f'code: {to_currency}')
    if invalids:
        return render_template('home.html', invalids=invalids)
    url = f'https://api.exchangerate.host/latest?base={from_currency}'
    response = requests.get(url)
    data = response.json()
    rate = data["rates"][to_currency]
    exchange = round(rate * int(amount), 2)
    return render_template('currency.html', exchange=exchange, to_currency=to_currency)