CREATE TABLE students(
    id INT,
    first_name VARCHAR(50),
    middle_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    location VARCHAR(50)
);

INSERT INTO students (id, first_name, middle_name, last_name, age, location)
VALUES (1, "Rommel", "Rufila", "Torquator", 30, "Makati"),
(2, "Kevin", "Kosme", "Kosmos", 65, "Bulacan"),
(3, "Anita", "Leonor", "Perez", 72, "Boracay"),
(4, "Anna", "Anita", "Cruz", 22, "Pasay"),
(5, "Melo", "Blank", "Anthony", 33, "New York"),
(6, "Tarzan", "Blank", "Jones", 44, "Iraq");

UPDATE students
SET first_name = "Ana", middle_name = "Cui", last_name = "Cajocson", age = 25, location = "Bulacan"
WHERE id = 1;

DELETE FROM students WHERE id = 6;