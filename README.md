# SQL Operations Guide
This repository provides an overview and examples of different SQL operations. SQL (Structured Query Language) is the standard language for relational database management systems. It is used for querying, updating, and managing data in a relational database.<br>

# Table of Contents
1.Introduction<br>
2.SQL Operations<br>
3.Data Definition Language (DDL)<br>
4.Data Manipulation Language (DML)<br>
5.Data Control Language (DCL)<br>
6.Transaction Control Language (TCL)<br>
7.Examples<br>
8.Further Resources<br>

# Introduction<br>
SQL is the language used for interacting with relational databases. It consists of several types of operations that serve different purposes:<br>

-DDL (Data Definition Language): Used to define and manage database structures.<br>
-DML (Data Manipulation Language): Used to query and modify data.<br>
-DCL (Data Control Language): Used to control access to data.<br>
-TCL (Transaction Control Language): Used to manage changes made by DML commands.<br>
## SQL Operations

### 1. Data Query Operations
These operations retrieve data from a database.

- **SELECT**: Retrieves data from one or more tables.
  ```sql
  SELECT column1, column2 FROM table_name;
<br>
  2. Data Manipulation Operations (DML)
These operations are used to modify data within a database.

INSERT: Adds new data into a table.
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
<br>
UPDATE: Updates existing data in a table.
<br>
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;<br>
DELETE: Deletes data from a table.<br>
DELETE FROM table_name WHERE condition;<br>
