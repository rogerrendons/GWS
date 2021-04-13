-- Create database, step1
CREATE DATABASE gwsupport
    ENCODING = "UTF8";
-- use gwsupport database, step2
\c gwsupport
-- import UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Example creation table user  step3
CREATE TABLE IF NOT EXISTS "users" (
    id uuid DEFAULT uuid_generate_v4 (),
    email varchar NOT NULL CHECK (email <> ''),
    first_name varchar NOT NULL CHECK (first_name <> ''),
    last_name varchar NOT NULL CHECK (last_name <> ''),
    supporter boolean NOT NULL,
    password varchar NOT NULL CHECK (password <> ''),
    PRIMARY KEY (id)
);
-- Example creation table support step6
CREATE TABLE IF NOT EXISTS "supports" (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id_usr uuid REFERENCES "users"(id),
    supporter_id varchar,
    tittle varchar(50) NOT NULL,
    description varchar(1000) NOT NULL,
    status varchar NOT NULL,
    user_priority smallint NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);