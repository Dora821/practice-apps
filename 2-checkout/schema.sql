DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE clientInfo (
  id INT NOT NULL,
  session_id VARCHAR(255) NOT NULL,
  username VARCHAR(20),
  email VARCHAR(255),
  passwd VARCHAR(20),
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  city VARCHAR(20),
  curState VARCHAR(20),
  zipcode VARCHAR(20),
  phoneNum VARCHAR(10),
  creditCard VARCHAR(20),
  expiration DATE,
  cvv VARCHAR(3),
  billingZip VARCHAR(6)
);