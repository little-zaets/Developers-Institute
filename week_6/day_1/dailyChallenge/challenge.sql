-- Database: hollywood

-- DROP DATABASE hollywood;

-- CREATE DATABASE hollywood
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_IL'
--     LC_CTYPE = 'en_IL'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
CREATE TABLE actors (
 actor_id SERIAL PRIMARY KEY,
 first_name varchar,
 last_name varchar, 
 date_birth timestamp,
 number_oscars double precision
)
----Original table had wrong datatype for date of birth
ALTER TABLE actors
ALTER COLUMN date_birth TYPE date;
--insert actor values into table:
INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES
	('Matt','Damon','08/10/1970', 5),
	('George','Clooney','06/05/1961 ', 2),
	('Brad', 'Pitt', '1963-12-18', 8 ),
	('Steve', 'Carell', '1962-08-16', 2),
	('Emma','Stone','1988-11-06', 2),
	('Emma','Watson','1990-04-15', 3);
----George Clooney was originally inserted with extra spaces, the below updates his first and last name
UPDATE actors
SET first_name = 'George', last_name = 'Clooney'
WHERE actor_id = 2;
--Count how many actors are in the table:
SELECT COUNT(actor_id)
FROM actors; --result: 6
--Try to add a new actor with some blank fields. What do you think the outcome will be?
INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('', 'Johnson','1985-09-29', 5);
-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Jimmy', '', ''); 
----Cannot insert less or more values than the amount of target columns
----If the value is a string you can input an empty string without error
SELECT * FROM actors;