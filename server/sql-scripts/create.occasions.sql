DROP TABLE IF EXISTS occasions;
DROP TABLE IF EXISTS votes;

CREATE TABLE occasions (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username TEXT NOT NULL,
  title TEXT NOT NULL,
  photoone TEXT NOT NULL,
  phototwo TEXT NOT NULL,
  photothree TEXT,
  posttime TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE votes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  photoonevotes INTEGER NOT NULL,
  phototwovotes INTEGER NOT NULL,
  photothreevotes INTEGER NOT NULL,
  occasion INTEGER REFERENCES occasions(id) ON DELETE SET NULL
);

-- TODO these tables do not seem to be connected via the votes(occasion) label
