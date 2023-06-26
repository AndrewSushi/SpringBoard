DROP DATABASE IF EXISTS craigslist_db;
CREATE DATABASE craigslist_db;

\c craigslist_db;

CREATE TABLE regions(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    preferrend_region_id INT REFERENCES regions
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    user_id INT REFERENCES users NOT NULL,
    category_id INT REFERENCES categories NOT NULL,
    location_id INT REFERENCES regions NOT NULL,
    region_id INT REFERENCES regions NOT NULL
);