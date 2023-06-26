DROP DATABASE IF EXISTS medical;
CREATE DATABASE medical;

\c medical;

CREATE TABLE doctors(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birthday DATE NOT NULL,
    field TEXT NOT NULL
);

CREATE TABLE center(
    id SERIAL PRIMARY KEY,
    head_doctor INT REFERENCES doctors ON DELETE CASCADE,
    founded_in DATE NOT NULL,
    doctor_count INT CHECK (doctor_count > 0) DEFAULT 1
);

CREATE TABLE patients(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birthday DATE NOT NULL,
    insurance TEXT
);

CREATE TABLE diseases(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE perscription(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    usage TEXT NOT NULL
);

CREATE TABLE visit(
    id SERIAL PRIMARY KEY,
    doctor_id INT REFERENCES doctors NOT NULL,
    patient_id INT REFERENCES patients NOT NULL,
    date DATE
);

CREATE TABLE diagnoses(
    id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES visit,
    disease_id INT REFERENCES diseases,
    perscription_id INT REFERENCES perscription,
    notes TEXT
);