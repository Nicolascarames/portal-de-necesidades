const getDB = require('../database/db');

const getService = async (req, res, next) => {
  let conexion;
  const idService = req.params.id;
  try {
    conexion = await getDB();

    const [service] = await conexion.query(
      `SELECT * FROM servicios WHERE idservicios = ? `,
      [idService]
    );

    const [coments] = await conexion.query(
      `SELECT * FROM comentarios WHERE servicios_id=?;`,
      [idService]
    );

    if (service.length) {
      return res.send({
        status: 'ok',
        dataService: service,
        dataComents: coments,
      });
    } else {
      res.status(400).send('servicio no encontrado');
    }
  } catch (error) {
    // console.error(error);
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = getService;
