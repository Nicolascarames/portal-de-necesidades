const getDB = require('../database/db');

const srcData = async (req, res, next) => {
  let conexion;
  console.log(req.body)
  const {text} = req.body;
 
  try {
    conexion = await getDB();
    const [service] = await conexion.query(
        `SELECT users_id,titulo,idservicios FROM servicios WHERE titulo LIKE '%${text}%' `,
        [text]
      ); 
      
      res.send(service)
  } catch (error) { 
    console.log(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = srcData;
 