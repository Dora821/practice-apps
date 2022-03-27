const mysql = require("mysql2");
const Promise = require("bluebird");
require('dotenv').config();

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  // .then(() =>
  //   // Expand this table definition as needed:
  //   db.queryAsync(
  //   )
  // )
  .catch((err) => console.log('db err', err));


db.save = (obj) => {
  console.log(obj);
  var queryStr = 'INSERT INTO clientInfo (username, email, passwd, address1, address2, city, curState, zipcode, phoneNum, creditCard, expiration, cvv, billingZip, session_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  var queryArg = [obj.username, obj.email, obj.passwd, obj.address1, obj.address2, obj.city, obj.curState, obj.zipcode, obj.phoneNum, obj.creditCard, obj.expiration, obj.cvv, obj.billingZip, obj.session_id];
  return db.queryAsync(queryStr, queryArg);
};

db.find = (sId) => {
  var queryStr = `SELECT session_id FROM clientInfo;`;
  return db.queryAsync(queryStr);
};

module.exports = db;
