DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ('Ice Ice Baby', 'Vanilla Ice', 'Hip-Hop');

INSERT INTO songs (title, artist, genre)
VALUES ('Chocolate Rain', 'Tay Zonday', 'Pop');

INSERT INTO songs (title, artist, genre)
VALUES ('Strawberry Bubble Gum', 'Justin Timberlake', 'R&B');

SELECT * FROM songs;