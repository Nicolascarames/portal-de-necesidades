const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const modifyUser = async (req, res, next) => {
  // console.log(req.body);
  // console.log(req.isUser);
  let conexion;

  try {
    conexion = await getDb();
    const { nombre, username, biografia } = req.body;
    const { id } = req.isUser;
    const avatar = req.file ? req.file.filename : 'default';

    await conexion.query(
      `
        UPDATE users
        SET nombre=?, username=?, biografia=?, avatar=?, updated_at=?
        WHERE id=?
        `,
      [nombre, username, biografia, avatar, new Date(), id]
    );

    const [user] = await conexion.query(
      `
            SELECT id, nombre, username, email, active, role
            FROM users
            WHERE id=?
            `,
      [id]
    );

    const usuario = {
      id: user[0].id,
      nombre: user[0].nombre,
      username: user[0].username,
      email: user[0].email,
      active: user[0].active,
      role: user[0].role,
    };

    conexion.release();

    res.send({
      status: 'ok',
      message: 'Usuario modificado correctamente',
      usuario: usuario,
    });
  } catch (error) {
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = modifyUser;
