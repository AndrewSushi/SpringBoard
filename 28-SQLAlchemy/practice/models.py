from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class Player(db.Model):
    __tablename__ = 'players'

    player_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.Text, unique=True, nullable=False)
    date_created = db.Column(db.Date, nullable=False)

    scores = db.relationship('Score', backref='players')


class Map(db.Model):
    __tablename__ = 'maps'

    map_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    map_name = db.Column(db.Text, unique=True, nullable=False)
    artist = db.Column(db.Text, nullable=False)
    mapper = db.Column(db.Text, nullable=False)
    date_created = db.Column(db.Date, nullable=False)

class Score(db.Model):
    __tablename__ = 'scores'

    score_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    player_id = db.Column(db.Integer, db.ForeignKey('players.player_id'))
    map_id = db.Column(db.Integer, db.ForeignKey('maps.map_id'))
    score = db.Column(db.Integer, nullable=False)
    accuracy = db.Column(db.Float, nullable=False)
    mods = db.Column(db.Text, nullable=False)

    map = db.relationship('Map', backref='score')