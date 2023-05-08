const BDconn = require('../database/db');

  const Test = async(req, res) => {
    const connect = await BDconn();
    const [response] = await connect.query('DESCRIBE users ');
    console.log(response);
    res.send('recibido!');
  }
  const Prueba = (req,res) =>{
    res.send('recibido pueba2!')
  }
  module.exports = {Test,Prueba}