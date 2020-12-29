DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;
USE staff_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL ,
  title VARCHAR(30) NULL,
  salary DECIMAL (10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

create TABLE employee(
id INT NOT NULL,
first_name VARCHAR(30), 
last_name VARCHAR(30), 
role_id INT NULL,
manager_ID INT NULL,
PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees

