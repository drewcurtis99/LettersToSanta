DROP TABLE IF EXISTS letters;
DROP TABLE IF EXISTS list;

CREATE TABLE IF NOT EXISTS letters (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  subject TEXT,
  country TEXT,
  city TEXT,
  message TEXT
);

CREATE TABLE IF NOT EXISTS list (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  country TEXT,
  city TEXT,
  isNice BOOLEAN,
  isChecked BOOLEAN
);