CREATE SCHEMA inventory; 
USE inventory;

CREATE TABLE inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE logininfo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO inventory (name, quantity, price)
VALUES
    ('Shoes A', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes B', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes C', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes D', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2)),
    ('Shoes E', ROUND(RAND() * 100), ROUND(RAND() * 100 + 10, 2));

INSERT INTO logininfo (username, password)
VALUES
('admin', 'password');


--- This is how I created it in MySQL