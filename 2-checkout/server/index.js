require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("../database/db.js");

const app = express();
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/checkout/session_id', (req, res)=>{
  var sessionID= req.session_id;
  console.log(sessionID);
  db.find(sessionID)
    .then((data)=>{
      console.log('data', data);
      var target = data[0];
      if (target.lenght === 0) {
        res.send('true');
      } else {
        for (let item of target) {
          if (item.session_id === sessionID) {
            res.send('false');
          }
        }
        res.send('true');
      }
    })
    .catch(error=>console.log('server get err', error));
});

app.post('/checkout', (req, res)=>{
  var checkout = req.body;
  // console.log('checkout', checkout);
  checkout['session_id'] = req.session_id;
  console.log('checkout', checkout);
  db.save(checkout)
    .then(res.status(201).end())
    .catch(error=>console.log(error));
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
