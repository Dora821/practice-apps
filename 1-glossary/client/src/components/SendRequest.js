import axios from 'axios';

const getAll = (key=null) => {
  console.log('axios getall is working key', key);
  return axios.get('/notes', {params:
  {word: key}
  })
  // .then((data)=>{callback(data)})
  // .error(alert(`Can't retrive information`))
}

const postWord = (obj, callback) => {
  axios.post('/addNote', obj)
  .then((res)=>{
    // console.log('add word post req res', res);
    callback(res.data);
  })
  .catch(err=>console.log('err on posting', err))
}

const update = (updates, callback) => {
  axios.put('/update', updates)
    .then((response)=>callback(response.data))
    .catch((err)=>alert(err));
};

const deleteWord = (id, callback) => {
  // console.log('deleteWord', id);
  return axios.delete('/delete/', {data: {'id': id}})
  // .then(()=>callback())
  // .catch(err=>console.log(err))
}

export {getAll, update, postWord, deleteWord};
