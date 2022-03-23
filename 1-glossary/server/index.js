const db = require('./db.js');
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/addNote', (req, res)=> {
  let input = req.body;
  let filter = {'word': req.body.word};
  let updates = {'definition': req.body.definition};
  console.log('input in server', input);
  console.log(typeof db.update);
  db.update(filter, updates)
    .then(()=> {
      db.getAll().
        then((data)=>res.send(data))
        .catch((err)=>console.log('error occurs when getting info from DB'));
    })
    .catch(error=> console.error('error occured when saving data into DB', error));
  // -----------------------
  // db.getAll()
  //   .then((data)=>res.send(data))
  //   .catch((err)=>console.log('err in post server', err));
// ---------------------------
  // console.log('requet body', input);
//   db.save(input)
//     .then(()=> {
//       db.getAll().
//         then((data)=>res.send(data))
//         .catch((err)=>console.log('error occurs when getting info from DB'));
//     })
//     .catch(error=> console.error('error occured when saving data into DB'));
});


app.get('/search', (req, res)=> {
  let keyWord = req.body.word;
  console.log('keyword searched', keyWord);
  db.getOne(keyWord)
    .then((data)=>res.send(data))
    .catch(error => console.log('error occurs when searching in DB'));
});


app.delete('/delete', (req, res)=>{
  let delKey = {'word':req.body.word};
  db.delEntry(delKey)
    .then(()=>res.send('success'))
    .catch(err=>res.send(err));

});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
