DROP TABLE IF EXISTS letters;

CREATE TABLE IF NOT EXISTS Letters (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  subject TEXT,
  country TEXT,
  city TEXT,
  body TEXT
);