--1. Use UPDATE to change the language of some films. Make sure that you use valid languages:
UPDATE film
SET language_id = 2
WHERE length >= 180;
--2. Which foreign keys (references) are defined for the customer table? 
--How does this affect the way in which we INSERT into the customer table?
----The table customer has a constraint of a foreign key which references the address_id in the address table.
----In order to insert, you need to select the associated address_id in the address table when you list the values to insert.
--3. We created a new table called customer_review. Drop this table. 
--Is this an easy step, or does it need extra checking?
----Since the child table (customer_review) was created with a foreign key with the constraint ON DELETE CASCADE, 
----deleting the customer_review table will not affect other tables since it is not referenced by any of them
DROP TABLE customer_review;
--4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet):
SELECT COUNT(*) AS total_outstanding FROM rental
WHERE rental_date IS NOT NULL AND return_date IS NULL;
--5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet):
SELECT * FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
WHERE rental_date IS NOT NULL AND return_date IS NULL
ORDER BY rental_rate DESC LIMIT(30);
--6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. 
--Can you help him find which movies he wants to rent?
--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT * FROM film
RIGHT JOIN film_actor ON film_actor.film_id = film.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE description iLIKE '%sumo%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';
--2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film
RIGHT JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE rating = 'R' AND length < 60 AND category.name iLIKE 'documentary';
--3. The 3rd film : A film that his friend Matthew Mahan rented. 
--He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title, description, first_name || ' ' || last_name AS full_name, rental_rate, return_date FROM film 
LEFT JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
RIGHT JOIN customer ON rental.customer_id = customer.customer_id
WHERE rental_rate > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01' 
AND first_name = 'Matthew' AND last_name = 'Mahan';
--4. The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title, description, first_name || ' ' || last_name AS full_name, replacement_cost, return_date, amount FROM film 
INNER JOIN inventory ON film.film_id = inventory.film_id 
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON rental.customer_id = customer.customer_id
INNER JOIN payment ON rental.rental_id = payment.rental_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND description iLIKE '%boat%' OR title iLIKE '%boat%'
ORDER BY replacement_cost DESC LIMIT (1);