from models import db, connect_db, Cupcake
from app import app

db.drop_all()
db.create_all()

cupcakes = [
    Cupcake(flavor="Vanilla", size="small", rating=8, image="https://www.lifeloveandsugar.com/wp-content/uploads/2017/01/Moist-Vanilla-Cupcakes5.jpg    "),
    Cupcake(flavor="Chocolate", size="small", rating=7, image="https://thefirstyearblog.com/wp-content/uploads/2017/02/Chocolate-Cupcakes-32B.jpg"),
    Cupcake(flavor="Lemon", size="medium", rating=5, image="https://preppykitchen.com/wp-content/uploads/2020/03/lemon-cupcake-feature.jpg"),
    Cupcake(flavor="Red Velvet", size="large", rating=10, image="https://www.rainbownourishments.com/wp-content/uploads/2023/02/vegan-red-velvet-cupcakes-1-819x1024.jpg"),
    Cupcake(flavor="Birthday Cake", size="medium", rating=7.8, image="https://www.thecreativebite.com/wp-content/uploads/2016/05/Best-Birthday-Cupcakes-The-Creative-Bite-5-copy.jpg")
]

db.session.add_all(cupcakes)
db.session.commit()