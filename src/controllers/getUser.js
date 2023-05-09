const getDB = require('../database/db');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const conexion = await getDB();

    const [user] = await conexion.query(`SELECT * FROM users WHERE id = ?`, [
      id,
    ]);

    if (user.length) {
      return res.send({
        status: 'ok',
        data: user,
      });
    } else {
      res.status(400).send('usuario no encontrado');
    }
    conexion.release();
  } catch (error) {
    console.error(error);
  }
};

module.exports = getUser;
