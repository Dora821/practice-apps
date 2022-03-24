const mongoose = require('mongoose');
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/Glossary');
// 2. Set up any schema and models needed by the app
let GlossarySchema = mongoose.Schema({
  word: {type: String, unique: true, required: true},
  definition: String
});
// 3. Export the models
const Glossary = mongoose.model('Glossary', GlossarySchema);
// 4. Import the models into any modules that need them

// module.exports = {
const getAll = ()=> {
  return Glossary.find({});
};
const getOne = (key) => {
  console.log('db search function runnning', key);
  // return Glossary.findOne({'word':key}).exec();
  return Glossary.findOne({'word' : {$regex: key, $options: 'i'}}).exec();
};
const save = (obj)=> {
  // console.log('data in obj', obj);
  // let doc = new Glossary(obj);
  // return doc.save();
  // console.log(obj);
  return Glossary.create(obj);
};

const update = (filter, update) => {
  // console.log('filter', filter);
  // console.log('update', update);
  return Glossary.findOneAndUpdate(filter, update, {upsert:true});
};

const delEntry = (id) => {
  return Glossary.deleteOne({'_id': id});
};

// };
module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.save = save;
module.exports.update = update;
module.exports.delEntry = delEntry;