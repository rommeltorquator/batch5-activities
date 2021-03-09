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

