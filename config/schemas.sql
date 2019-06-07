-- create database and table for dev environment
DROP DATABASE IF EXISTS userDB;
CREATE DATABASE userDB;

USE userDB;

CREATE TABLE Users (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

-- seed data for dev database
INSERT INTO Users (username, password) VALUES
  ('John', 'stealthy'),
  ('Ming', 'supersecret'),
  ('Mariam', 'incognito');

-- create database and table for test environment
DROP DATABASE IF EXISTS userDB_test;
CREATE DATABASE userDB_test;

USE userDB_test;

CREATE TABLE Users (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);
