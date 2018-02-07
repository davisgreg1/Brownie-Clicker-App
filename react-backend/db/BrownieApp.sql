DROP DATABASE IF EXISTS BrownieApp;
CREATE DATABASE BrownieApp;

\c brownieapp;

CREATE TABLE players (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR
);

/* greg, password: 123456 */

INSERT INTO players (username, password_digest)
  VALUES ('Greg', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq')