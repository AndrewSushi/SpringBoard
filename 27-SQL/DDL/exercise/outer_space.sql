-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE galaxy(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  age FLOAT NOT NULL,
  planet_count INT
);

CREATE TABLE center(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  galaxy_id INT REFERENCES galaxy NOT NULL
);

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_id INT REFERENCES center NOT NULL,
  galaxy_id INT REFERENCES galaxy NOT NULL,
  is_sentient_life BOOLEAN
);

CREATE TABLE moons(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  planet_id INT REFERENCES planets NOT NULL
);

INSERT INTO galaxy(name, age) VALUES ('Milky Way', 1000000);
INSERT INTO center (name, galaxy_id) VALUES ('The Sun', 1), ('Proxima Centauri', 1), ('Gliese 876', 1);
INSERT INTO planets (name, orbital_period_in_years, orbits_id, galaxy_id, is_sentient_life)
VALUES
  ('Earth', 1.00, 1, 1, true),
  ('Mars', 1.88, 1, 1, false),
  ('Venus', 0.62, 1, 1, false),
  ('Neptune', 164.8, 1, 1, false),
  ('Proxima Centauri b', 0.03, 2, 1, false),
  ('Gliese 876 b', 0.23, 3, 1, false);

INSERT INTO moons (name, planet_id) VALUES ('The Moon', 1), ('Phobos', 2), ('Deimos', 2), ('Naiad', 4), ('Thalassa', 4), ('Despina', 4), ('Galatea', 4), ('Larissa', 4), ('S/2004 N 1', 4), ('S/2004 N 1', 4),
                                            ('Triton', 4), ('Nereid', 4), ('Halimede', 4), ('Sao', 4), ('Laomedeia', 4), ('Psamathe', 4), ('Neso', 4);