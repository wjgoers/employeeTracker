DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;
USE staff_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NULL,
  salary DECIMAL (10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

create TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30), 
last_name VARCHAR(30), 
role_id INT NULL,
manager_ID INT NULL,
PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Goers", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pat", "Corcoran", 2, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 50000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("software engineer", 50000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("sales", 50000.00, 3);

INSERT INTO department (name)
VALUES ("engineering");

INSERT INTO department (name)
VALUES ("sales");

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;