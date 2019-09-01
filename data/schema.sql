DROP TABLE IF EXISTS dogs;
CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR (255),
  breed VARCHAR (255),
  age NUMERIC(10,7)
);

INSERT INTO dogs (dog_name, breed, age)
VALUES('Razzle', 'not a dog', 7);

INSERT INTO dogs (dog_name, breed, age)
VALUES('Ginger', 'Labradoodle', 1);