-- CREATE TABLE posts(
--     title TEXT,
--     username TEXT,
--     link TEXT
-- );

DROP DATABASE IF EXISTS reddit_db;

CREATE DATABASE reddit_db;

\c reddit_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users ON DELETE CASCADE,
    comment_text TEXT NOT NULL
);

CREATE TABLE subreddits(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users ON DELETE SET NULL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INT CHECK (subscribers > 0) DEFAULT 1,
    is_private BOOLEAN DEFAULT false
);

INSERT INTO users (username, password) VALUES ('AndrewSushi', 'Sushi!!!'), ('AndrewSushi2', 'Sushi Again!!');
INSERT INTO subreddits (owner_id, name) VALUES (1, 'Sushi'), (2, 'More Sushi');
INSERT INTO comments (user_id, comment_text) VALUES (1, 'Sushi!'), (1, 'Wassup'), (2, 'Sup Sushi');