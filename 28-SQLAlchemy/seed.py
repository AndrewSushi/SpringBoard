from models import Buddies, db
from app import app

# Drop all tables, then create all tables
db.drop_all()
db.create_all()

# Empty the table
Buddies.query.delete()

# Add Buddies
Pig = Buddies(name="Pig", color="Pink")
Cheeto = Buddies(name="Cheeto", color="Orange")
Tiger = Buddies(name="Tiger", color="Orange")

db.session.add(Pig)
db.session.add(Cheeto)
db.session.add(Tiger)

db.session.commit()