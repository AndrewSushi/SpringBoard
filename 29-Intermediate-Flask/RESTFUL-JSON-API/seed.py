from models import db, connect_db, Todo
from app import app

db.drop_all()
db.create_all()

todos = [
    Todo(title="Wake up"),
    Todo(title="Get ready"),
    Todo(title="Work out"),
    Todo(title="Work on Springboard"),
    Todo(title="Do more work lol")
]

db.session.add_all(todos)
db.session.commit()