CREATE TABLE author (
	ID SERIAL NOT NULL PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50)
)
INSERT INTO author (first_name, last_name)
VALUES
	('Jane', 'Austen'),
	('Scott', 'Hanselman'),
	('Jason', 'Gaylord'),
	('Patrick', 'Rothfuss'),
	('Neil', 'Gaiman'),
	('James', 'Clavell'),
	('Christian', 'Wenz'),
	('Todd', 'Miranda');
CREATE TABLE book (
	book_id SERIAL NOT NULL PRIMARY KEY,
	title varchar(50) NOT NULL,
	author_id INTEGER NOT NULL,
	FOREIGN KEY (author_id) REFERENCES author(id)
)
INSERT INTO book (title, author_id)
VALUES
	('Pride and Prejudice', (SELECT id FROM author WHERE first_name = 'Jane' AND last_name = 'Austen')),
	('Persuasion', (SELECT id FROM author WHERE first_name = 'Jane' AND last_name = 'Austen')),
	('The Imposter`s Handbook', (SELECT id FROM author WHERE first_name = 'Scott' AND last_name = 'Hanselman')),
	('Code Leader', (SELECT id FROM author WHERE first_name = 'Scott' AND last_name = 'Hanselman')),
	('Professional ASP.Net 4.5 in C# and VB', (SELECT id FROM author WHERE first_name = 'Jason' AND last_name = 'Gaylord')),
	('The Name of the Wind', (SELECT id FROM author WHERE first_name = 'Patrick' AND last_name = 'Rothfuss')),
	('The Slow Regard of Silent Things', (SELECT id FROM author WHERE first_name = 'Patrick' AND last_name = 'Rothfuss')),
	('The Wise Man`s Fear', (SELECT id FROM author WHERE first_name = 'Patrick' AND last_name = 'Rothfuss')),
	('American Gods', (SELECT id FROM author WHERE first_name = 'Neil' AND last_name = 'Gaiman')),
	('Shogun', (SELECT id FROM author WHERE first_name = 'James' AND last_name = 'Clavell')),
	('Tai-pan', (SELECT id FROM author WHERE first_name = 'James' AND last_name = 'Clavell')),
	('Noble House', (SELECT id FROM author WHERE first_name = 'James' AND last_name = 'Clavell')),
	('King Rat', (SELECT id FROM author WHERE first_name = 'James' AND last_name = 'Clavell'));
CREATE TABLE book_review (
	review_id SERIAL NOT NULL PRIMARY KEY,
	book_id INTEGER NOT NULL,
	review_content VARCHAR,
	rating INTEGER CHECK(rating >= 1 AND rating <= 10),
	FOREIGN KEY (book_id) REFERENCES book (book_id) ON DELETE CASCADE
)
INSERT INTO book_review (review_id, book_id, review_content, rating)
VALUES
	(1, (SELECT book_id FROM book WHERE title = 'American Gods'), 'Titans clash, but with more fuss than fury in this fantasy demi-epic from the author of Neverwhere.', 9),
	(2, (SELECT book_id FROM book WHERE title = 'Shogun'), 'Epic historical novel that truly sweeps you off of your feet and takes you to a far away land. Engaging, riveting, gripping, enthralling, powerful, exciting.', 10),
	(3, (SELECT book_id FROM book WHERE title = 'King Rat'), 'Powerful and engrossing, King Rat artfully weaves the author’s own World War II prison camp experiences into a compelling narrative of survival amidst the grim realities of war and what men can do when pushed to the edge.', 8),
	(4, (SELECT book_id FROM book WHERE title = 'American Gods'), 'Titans clash, but with more fuss than fury in this fantasy demi-epic from the author of Neverwhere.', 9),
	(5, (SELECT book_id FROM book WHERE title = 'Pride and Prejudice'), 'Pride and Prejudice tells a complex story that excites and invites readers to be more understanding of the human condition. Everyone needs love and support and people from wealthy backgrounds are no exception. I fell in love with the characters, for they are all quirky and distinguished from one another.', 9);
SELECT * FROM book
RIGHT JOIN book_review ON book.book_id = book_review.book_id; 
-- 5 records retrieved, AKA matching records from left table were joined to the right
SELECT * FROM book
LEFT JOIN book_review ON book.book_id = book_review.book_id; 
-- all records retrieved from left and right table, including null values
SELECT * FROM book_review
INNER JOIN book ON book_review.book_id = book.book_id; 
-- returns all records with matching records between the two tables
SELECT first_name || ' ' || last_name AS author_name, rating, review_content FROM author 
INNER JOIN book ON author.id = book.author_id
INNER JOIN book_review ON book.book_id = book_review.book_id; 
-- returns only matching records from everything
SELECT first_name || ' ' || last_name AS author_name, title, rating, review_content FROM book_review
FULL OUTER JOIN book ON book_review.book_id = book.book_id
FULL OUTER JOIN author ON book.author_id = author.id;
-- retrieves all selected columns and rows in those columns that both don't and do have matches