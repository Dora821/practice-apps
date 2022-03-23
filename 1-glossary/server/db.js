const mongoose = require('mongoose');
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/Glossary');
// 2. Set up any schema and models needed by the app
let GlossarySchema = mongoose.Schema({
  word: {type: String, unique: true},
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
  console.log('db function runnning', key);
  return Glossary.findOne({word:key}).exec();
};
const save = (obj)=> {
  console.log('data in obj', obj);
  return Glossary.save(obj);
};

const update = (filter, update) => {
  console.log('filter', filter);
  console.log('update', update);
  return Glossary.findOneAndUpdate(filter, update, {upsert:true});
};

const delEntry = (obj) => {
  return Glossary.deleteOne(obj);
};

// };
module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.save = save;
module.exports.update = update;
module.exports.delEntry = delEntry;