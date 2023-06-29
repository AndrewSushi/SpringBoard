from models import User, db
from app import app

db.drop_all()
db.create_all()

andrew = User(first_name="Andrew", last_name="Chan", image_url="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/hatsune-miku-cute-reyga-anggriawan.jpg")

db.session.add(andrew)
db.session.commit()