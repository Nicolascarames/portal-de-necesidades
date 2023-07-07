const getDB = require('../database/db');

const srcData = async (req, res, next) => {
  let conexion;
  const {text} = req.body;
  try {
    conexion = await getDB();
    const [service] = await conexion.query(
        `SELECT users_id,titulo,idservicios FROM servicios WHERE titulo LIKE '%${text}%' `,
        [text]
      ); 
      console.log(service)
      res.send(service)
  } catch (error) { 
    console.log(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = srcData;
 