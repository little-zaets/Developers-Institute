--Use SQL to get the following from the database
--All items, ordered by price (lowest to highest):
SELECT * FROM items ORDER BY price ASC;
--Items with a price above 80 (80 included), ordered by price (highest to lowest):
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
--The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
--All last names (no other columns!), in reverse alphabetical order (Z-A):
SELECT last_name FROM customers ORDER BY last_name DESC;
--Create a table named purchases. It should have 2 columns : 
--customer_id and item_id. These columns are references from the tables customers and items.
CREATE TABLE purchases (
	customer_id int,
	item_id int,
	FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
	FOREIGN KEY (item_id) REFERENCES items (item_id)
)
SELECT * FROM purchases;
--Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). 
--Does this work? Why/why not?
INSERT INTO purchases (customer_id, item_id)
VALUES (7, null);

UPDATE purchases
SET item_id = 1 
WHERE customer_id = 1;
--Add 5 rows that reference existing customers and items:
INSERT INTO purchases (customer_id, item_id)
VALUES (5, 2), (2, 3), (1, 1), (3, 2), (4, 3);
--Use SQL to get the following from the database:
--All purchases. Is this information useful to us? --no, the ID is probably not useful for understanding purchasing trends
SELECT * FROM purchases; 
--All purchases, joining with the customers table:
SELECT * FROM purchases
INNER JOIN customers 
ON purchases.customer_id = customers.customer_id;
--Purchases of the customer with the ID equal to 4:
SELECT * FROM purchases 
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id;
WHERE customers.customer_id = 4;
--Purchases for a large desk AND a small desk:
SELECT * FROM purchases 
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
WHERE items.item iLIKE 'large desk' OR items.item iLIKE 'small desk';
--Create a purchase for Scott Scott – he bought a hard drive:
INSERT INTO customers (first_name, last_name)
VALUES ('Scott', 'Scott'); --Scott Scott already exists, there I deleted his duplicate below:
DELETE FROM customers WHERE customer_id = 6;
--Insert hard drive into items table
INSERT INTO items (item, price)
VALUES ('Hard Drive', 258);
INSERT INTO purchases (customer_id, item_id)
VALUES ((SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'), 
		(SELECT item_id FROM items WHERE item = 'Hard Drive'));
SELECT * FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id 
WHERE customers.first_name iLIKE 'scott' AND customers.last_name iLIKE 'scott';
--Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
--Customer first name:
--Customer last name:
--Item name:
SELECT customers.first_name, customers.last_name, items.item FROM purchases 
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id 
ORDER BY items;