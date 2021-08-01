CREATE TABLE items (
 	item varchar,
	price double precision
)

CREATE TABLE customers (
 	first_name varchar,
	last_name varchar
)
-- Add the items to the items table:
INSERT INTO items(item, price)
VALUES 
	('Small Desk', 100),
	('Large desk', 300),
	('Fan', 80);
--Add 5 new customers to the customers table:
INSERT INTO customers(first_name, last_name)
VALUES 
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

--Use SQL to fetch the following data from the database
--All the items:
SELECT * FROM items;
SELECT * FROM customers;
--All the items with a price above 80 (80 not included):
SELECT * FROM items WHERE price > 80;
--All the items with a price below 300. (300 included):
SELECT * FROM items WHERE price <= 300;
--All customers whose last name is ‘Smith’ (What will be your outcome?):
SELECT * FROM customers WHERE last_name = 'Smith'; --0 rows affected after successful run
--All customers whose last name is ‘Jones’:
SELECT * FROM customers WHERE last_name = 'Jones';
--All customers whose firstname is not ‘Scott’:
SELECT * FROM customers WHERE last_name != 'Scott';
