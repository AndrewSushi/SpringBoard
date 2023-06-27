from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class Buddies(db.Model):

    __tablename__ = "buddies"

    @classmethod
    def get_by_color(self, color):
        return self.query.filter_by(color=color)

    def __repr__(self):
        return f"<Buddy: id={self.id} name={self.name} color={self.color} hunger={self.hunger}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    color = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, default=20)

    def greet(self):
        return f"Hi, my name is {self.name} and I am {self.color}"

    def feed(self, amount=20):
        self.hunger = max(self.hunger - amount, 0)