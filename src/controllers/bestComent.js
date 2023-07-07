const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const bestComent = async (req, res, next) => {
  let conexion;
  try {
    const { id } = req.params;
    // console.log(req.params);
    conexion = await getDb();

    const respuesta = await conexion.query(
      `UPDATE comentarios SET mejor_comentario =? WHERE idcomentarios=?`,
      [1, id]
    );

    // console.log(respuesta);

    res.send({
      status: 'ok',
      message: 'Seleccionado como mejor comentario',
      respuesta,
    });
  } catch (error) {
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = bestComent;
