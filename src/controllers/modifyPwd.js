const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const modifyPwd = async (req, res, next) => {
  try {
    const conexion = await getDb();

    const { pwdVieja, pwdNueva } = req.body;
    const { id } = req.params;

    const [user] = await conexion.query(
      `
            SELECT id
            FROM users
            WHERE id=? AND pwd=?
            `,
      [id, pwdVieja]
    );

    if (user.length === 0) {
      throw generateError('Pwd vieja, no correcta', 401);
    }

    await conexion.query(
      `
        UPDATE users
        SET pwd=?, updated_at=?
        WHERE id=?
        `,
      [pwdNueva, new Date(), id]
    );

    conexion.release();

    res.send({
      status: 'ok',
      message: 'Pwd cambiada correctamente',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyPwd;