DROP DATABASE IF EXISTS soccer_league_db;
CREATE DATABASE soccer_league_db;

\c soccer_league_db;

CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL
);

CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    birthday DATE NOT NULL,
    team_id INT REFERENCES teams
);

CREATE TABLE referees(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL
);

CREATE TABLE season(
    id SERIAL PRIMARY KEY,
    start_date DATE,
    end_date DATE
);

CREATE TABLE matches(
    id SERIAL PRIMARY KEY,
    home_team_id INT REFERENCES teams NOT NULL,
    away_team_id INT REFERENCES teams NOT NULL,
    location VARCHAR(30) NOT NULL,
    date DATE NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    season_id INT REFERENCES season NOT NULL,
    referee_id INT REFERENCES referees NOT NULL
);

CREATE TABLE goals(
    id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players NOT NULL,
    match_id INT REFERENCES matches NOT NULL,
    goals INT CHECK (goals > 0) DEFAULT 1
);

CREATE TABLE results(
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams NOT NULL,
    match_id INT REFERENCES matches NOT NULL,
    results INT NOT NULL
);