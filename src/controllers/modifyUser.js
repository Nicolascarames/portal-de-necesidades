const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const modifyUser = async (req, res, next) => {
  try {
    const conexion = await getDb();

    const { nombre, username, biografia, avatar } = req.body;
    const { id } = req.params;

    await conexion.query(
      `
        UPDATE users
        SET nombre=?, username=?, biografia=?, avatar=?, updated_at=?
        WHERE id=?
        `,
      [nombre, username, biografia, avatar, new Date(), id]
    );

    conexion.release();

    res.send({
      status: 'ok',
      message: 'Usuario modificado correctamente',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyUser;
