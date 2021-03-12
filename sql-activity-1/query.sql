***** 3-8-2021 activity *****

CREATE TABLE students(
    id INT,
    first_name VARCHAR(50),
    middle_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    location VARCHAR(50)
);

INSERT INTO students (id, first_name, middle_name, last_name, age, location)
VALUES (1, "Juan", "Blank", "Cruz", 18, "Manila"),
(2, "John", "Blank", "Young", 20, "Manila"),
(3, "Victor", "Blank", "Rivera", 21, "Manila"),
(4, "Adrian", "Blank", "Co", 19, "Laguna"),
(5, "Pau", "Blank", "Riosa", 22, "Marikina"),
(6, "Piolo", "Blank", "Pascual", 25, "Manila");

UPDATE students
SET first_name = "Ana", middle_name = "Cui", last_name = "Cajocson", age = 25, location = "Bulacan"
WHERE id = 1;

DELETE FROM students WHERE id = 6;

***** 3-9-2021 activity *****

SELECT COUNT(*) FROM STUDENTS;

SELECT * FROM STUDENTS 
WHERE location = "Manila";

SELECT AVG(age) FROM STUDENTS;

SELECT * FROM STUDENTS
ORDER BY age DESC;

***** 3-10-2021 activity *****

CREATE TABLE classrooms (
	id INT,
    student_id INT,
    section VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO classrooms (id, student_id, section)
VALUES
(1, 1, "A"),
(2, 2, "A"),
(3, 3, "B"),
(4, 4, "C"),
(5, 5, "B"),
(6, 6, "A"),
(7, 7, "C"),
(8, 8, "B"),
(9, 9, "B"),
(10, 10, "C");

SELECT first_name, last_name, section
FROM students
INNER JOIN classrooms
ON students.id = classrooms.student_id;

SELECT students.first_name, students.last_name, classrooms.section, students.age, classrooms.student_id
FROM students
LEFT JOIN classrooms
ON students.id = classrooms.student_id;

***** 3-12-2021 activity *****

Number 0.)

SELECT COUNT(DISTINCT inventory_id) AS unique_inventory_rented, COUNT(inventory_id) AS total_inventory_rented 
FROM rental;

Number 1.)

SELECT
film.title AS film_title,
film.release_year AS release_year,
film.rating AS rating,  
CONCAT(actor.first_name, ' ', actor.last_name) AS actor_full_name
FROM film_actor
INNER JOIN film
ON film_actor.film_id = film.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE actor.last_name IN ('Torn', 'Streep')
AND actor.first_name = 'Dan'
ORDER BY film_title;

Number 2.)

SELECT 
CONCAT(actor.first_name, ' ', actor.last_name) AS actor_full_name,
title AS film_title,
category.name AS category_name
FROM film_actor
INNER JOIN film
ON film_actor.film_id = film.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
INNER JOIN film_category
ON film_actor.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id
WHERE actor.last_name LIKE 'D%'
AND category.name = 'Comedy'
ORDER BY CONCAT(actor.first_name, ' ', actor.last_name);

Number 3.)

SELECT DISTINCT CONCAT(staff.first_name, ' ', staff.last_name) AS staff_full_name
FROM payment
INNER JOIN staff
ON payment.staff_id = staff.staff_id
INNER JOIN customer
ON payment.customer_id = customer.customer_id
INNER JOIN address
ON customer.address_id = address.address_id
INNER JOIN city
ON address.city_id = city.city_id
INNER JOIN country
ON city.country_id = country.country_id;