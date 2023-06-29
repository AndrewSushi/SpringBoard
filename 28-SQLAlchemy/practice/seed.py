from models import *
from app import app

db.drop_all()
db.create_all()

p1 = Player(username="AndrewSushi", date_created="2018-06-24")
p2 = Player(username="Feifei_09", date_created="2023-01-12")

m1 = Map(map_name="Tenkai e no Kippu", artist="Dragon Guardian", mapper="Kroytz", date_created="2019-8-23")
m2 = Map(map_name="Harumachi Clover", artist="Hanasaka Yui", mapper="Sotarks", date_created="2017-4-12")
m3 = Map(map_name="Yubi Bouenkyou ~Anime-ban~", artist="Nogizaka46", mapper="Nevo", date_created="2016-4-13")
m4 = Map(map_name="Freedom Dive", artist="XI", mapper="Nakagawa-Kanon", date_created="2012-08-26")

s1 = Score(player_id=1, map_id=1, score=123456789, accuracy=100.00, mods='HR')
s2 = Score(player_id=1, map_id=2, score=1234567, accuracy=50.31, mods='HDDTHRFL')
s3 = Score(player_id=1, map_id=3, score=1445689, accuracy=99.98, mods='HDDT')
s4 = Score(player_id=1, map_id=4, score=234567890, accuracy=100.00, mods='HDHR')
s5 = Score(player_id=2, map_id=2, score=500986, accuracy=78.34, mods='NF')
s6 = Score(player_id=2, map_id=3, score=479093, accuracy=68.13, mods='NM')


db.session.add_all([p1, p2])
db.session.commit()

db.session.add_all([m1, m2, m3, m4])
db.session.commit()

db.session.add_all([s1, s2, s3, s4, s5, s6])
db.session.commit()