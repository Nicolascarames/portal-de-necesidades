const BDconn = require('../database/db');



const Test = async (req, res) => {
  const connect = await BDconn();
  const [response] = await connect.query('DESCRIBE users ');
  console.log(response);
  res.send('recibido!');
}
const Prueba = (req, res) => {
  res.send('recibido pueba2!')
}



const AddService = async (req,res) => {
  try {
    if(req.file){
      console.log('file recibido',req.file);
      console.log('body recibido',req.body);
  
    }else{
      console.log('no hay file');
      console.log('body recibido',req.body);

    }
    res.send('add service listener');
    console.log('works!')
  } catch (error) {
    res.send(error)
  }
  

  
}

module.exports = { Test, Prueba, AddService }