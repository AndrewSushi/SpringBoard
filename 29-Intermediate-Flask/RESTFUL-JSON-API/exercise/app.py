from flask import Flask, request, jsonify, render_template, redirect

from models import db, connect_db, Cupcake
from forms import CupcakeForm

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "SushiSushi"

connect_db(app)

@app.route('/')
def home():
    cupcakes = Cupcake.query.all()
    return render_template("index.html",cupcakes=cupcakes)

@app.route('/cupcakes/new', methods=["GET", "POST"])
def add_cupcake():
    form = CupcakeForm()
    if form.validate_on_submit():
        flavor = form.flavor.data
        size = form.size.data
        rating = form.rating.data
        image = form.image.data

        new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)
        db.session.add(new_cupcake)
        db.session.commit()
        return redirect('/')
    else:
        return render_template('add_cupcake_form.html', form=form)

@app.route('/api/cupcakes')
def list_cupcakes():
    cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=cupcakes)

@app.route('/api/cupcakes/<int:id>')
def get_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    return jsonify(cupcake.serialize())

@app.route('/api/cupcakes/', methods=["POST"])
def create_cupcake():
    new_cupcake = Cupcake(flavor=request.json["flavor"],
                          size=request.json["size"],
                          rating=request.json["rating"],
                          image=request.json["image"])
    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(new_cupcake.serialize())
    return (response_json, 201)


@app.route('/api/cupcakes/<int:id>', methods=["PATCH"])
def update_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    cupcake.flavor = request.json.get("flavor", cupcake.flavor)
    cupcake.size = request.json.get("size", cupcake.size)
    cupcake.rating = request.json.get("rating", cupcake.rating)
    cupcake.image = request.json.get("image", cupcake.image)
    db.session.commit()
    return jsonify(cupcake=cupcake.serialize())

@app.route('/api/cupcakes/<int:id>', methods=["DELETE"])
def delete_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    db.session.delete(cupcake)
    db.session.commit()
    return jsonify(message="deleted")