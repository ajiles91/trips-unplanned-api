DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  userName TEXT NOT NULL,
  comment TEXT NOT NULL
);