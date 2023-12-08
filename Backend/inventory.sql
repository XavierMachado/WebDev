CREATE SCHEMA inventory; 
USE inventory;

CREATE TABLE inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password)
VALUES('admin', 'password')

INSERT INTO inventory (name, quantity, price)
VALUES
    ('Shoes A', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes B', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes C', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes D', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes E', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2));

--- This is how I created it in MySQL