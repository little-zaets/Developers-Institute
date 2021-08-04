--1. Get a list of all film languages:
SELECT name FROM language
INNER JOIN film ON film.language_id = language.language_id;
--2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. 
--Try your query with different joins:
--Get all films, even if they don’t have languages--
SELECT title, description, name FROM film
FULL OUTER JOIN language ON film.language_id = language.language_id;
--3. Create a new table called new_film with the following columns : id, name. Add some new films to the table:
 CREATE TABLE new_film (
	 id INTEGER PRIMARY KEY,
	 name varchar(50)
 );
 INSERT INTO new_film
 VALUES 
 	(1006, 'The Last Samurai'),
	(1007, 'Wallace and Gromit'),
	(1008, 'Mrs.Doubtfire'),
	(1009, 'A Beautiful Mind'),
	(1010, 'Cast Away');
--4. Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id SERIAL NOT NULL PRIMARY KEY,
	film_id INTEGER,
	language_id INTEGER,
	title varchar(50),
	score INTEGER CHECK(score >= 1 AND score <= 10),
	review_text varchar,
	last_update timestamp,
	FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
	FOREIGN KEY (language_id) REFERENCES language (language_id)
);
SELECT * FROM customer_review;
--5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables:
INSERT INTO customer_review (review_id, film_id, language_id, title, score, review_text, last_update)
VALUES 
(1, (SELECT id FROM new_film WHERE new_film.name = 'The Last Samurai'), (SELECT language_id FROM language WHERE language_id = 4), 'The Last Samurai', 8, 'A dazzling, exhilarating, refreshingly character-driven and thoroughly captivating experience that must be seen on the big screen. It`s unlike any film you`ve seen before.', '2006-02-17'),
(2, (SELECT id FROM new_film WHERE new_film.name = 'Cast Away'), (SELECT language_id FROM language WHERE language_id = 2), 'Cast Away', 9, 'Remains one of the more vividly transporting films I`ve come into contact with. It`s heartbreaking, darkly comedic, bravely observational, and ultimately, pure emotional poetry.', '2006-02-20');
--6. Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1010;
-- Record was also deleted in customer_review
