from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import InputRequired, URL, NumberRange, Optional

class CupcakeForm(FlaskForm):
    flavor = StringField("Flavor", validators=[InputRequired(message="Flavor cannot be blank")])
    size = StringField("Size", validators=[InputRequired(message="Size cannot be blank")])
    rating = FloatField("Rating out of 10", validators=[InputRequired(message="Rating cannot be nothing"), NumberRange(min=0, max=10)])
    image = StringField("Image URL", validators=[Optional(), URL()])