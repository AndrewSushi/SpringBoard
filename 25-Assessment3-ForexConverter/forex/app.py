from flask import Flask, render_template, request
import requests

url = 'https://api.exchangerate.host/latest'
response = requests.get(url)
data = response.json()
currencies = data["rates"]

# ?base=USD
# print(data)
# for currency, ammount in currencies:
#     if currency == "USD":
#         print(ammount)

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/convert')
def convert():
    from_currency = request.args["from"]
    to_currency = request.args["to"]
    amount = request.args["amount"]
    # TODO type check and make sure they're normal
    # TODO resend the api request with the from currency
    return render_template('test.html', data=data)