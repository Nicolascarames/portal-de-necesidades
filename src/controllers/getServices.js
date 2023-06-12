const getDB = require('../database/db');

const getServices = async (req, res, next) => {
  let conexion;
  try {
    conexion = await getDB();

    const [user] = await conexion.query(`SELECT * FROM servicios `);

    if (user.length) {
      return res.send({
        status: 'ok',
        data: user,
      });
    } else {
      res.status(400).send('servicios no encontrado');
    }
    conexion.release();
  } catch (error) {
    // console.error(error);
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = getServices;
