const axios = require('axios');

var findIfNewClient = ()=>{
  return axios.get('/checkout/session_id');
};

var postInformation = (obj) => {
  console.log('obj', obj);
  return axios.post('/checkout', obj);
};

export {findIfNewClient, postInformation};