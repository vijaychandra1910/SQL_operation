CREATE TABLE user(
 id VARCHAR(50) PRIMARY KEY,
 username VARCHAR(50) UNIQUE,
 email VARCHAR(100) UNIQUE NOT NULL,
 password VARCHAR(255) NOT NULL
);
