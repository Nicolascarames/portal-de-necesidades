const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const privadosGet = async (req, res, next) => {
  let conexion;
  try {
    conexion = await getDb();
    const toUser = req.params.id;
    const { id } = req.isUser;

    const [privados1] = await conexion.query(
      `
            SELECT *
            FROM mensajes_privados
            WHERE users_id=? AND to_user=?
            `,
      [id, toUser]
    );

    const [privados2] = await conexion.query(
      `
            SELECT *
            FROM mensajes_privados
            WHERE users_id=? AND to_user=?
            `,
      [toUser, id]
    );

    const privados = privados1.concat(privados2);

    res.send({
      status: 'ok',
      data: privados,
    });
  } catch (error) {
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = privadosGet;
