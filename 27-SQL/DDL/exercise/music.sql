-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE album(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  release_date DATE NOT NULL
);

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  album_id INT REFERENCES album
);

CREATE TABLE artists(
  id SERIAL PRIMARY KEY,
  song_id INT REFERENCES songs,
  album_id INT REFERENCES album
);

CREATE TABLE produces(
  id SERIAL PRIMARY KEY,
  song_id INT REFERENCES songs,
  album_id INT REFERENCES album
);

INSERT INTO album (release_date, name) VALUES 
('04-15-1997', 'Middle of Nowhere'), 
('10-31-1975', 'A Night at the Opera'),
('11-14-1995', 'Daydream'),
('09-27-2018', 'A Star Is Born'),
('08-21-2001', 'Silver Side Up'),
('10-20-2009', 'The Blueprint 3'),
('12-17-2013', 'Prism'),
('06-21-2011', 'Hands All Over'),
('05-14-2002', 'Let Go'),
('11-07-1999', 'The Writing''s on the Wall');


INSERT INTO songs
  (title, duration_in_seconds, album_id)
VALUES
  ('MMMBop', 238, 1),
  ('Bohemian Rhapsody', 355, 2),
  ('One Sweet Day', 282, 3),
  ('Shallow', 216, 4),
  ('How You Remind Me', 223, 5),
  ('New York State of Mind', 276, 6),
  ('Dark Horse', 215, 7),
  ('Moves Like Jagger', 201, 8),
  ('Complicated', 244, 9),
  ('Say My Name', 240, 10);

-- INSERT INTO artists (song_id, album_id) VALUES
--   ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
--   ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
--   ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
--   ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
--   ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
--   ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
--   ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
--   ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
--   ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
--   ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');
