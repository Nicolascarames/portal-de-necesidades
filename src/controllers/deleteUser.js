const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conexion = await getDb();

    // console.log(req.isUser.id, id);

    if (req.isUser.id == id) {
      await conexion.query(
        // `SELECT * FROM  users`
        `
        UPDATE users
        SET deleted=1, updated_at=?
        WHERE id=?
        `,
        [new Date(), id]
      );

      res.send({
        status: 'ok',
        message: `usuario ${id} borrado con exito`,
      });
    } else {
      throw generateError('no tienes permisos para borrar usuario', 401);
    }

    conexion.release();
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
