const getDb = require('../database/db');
const { generateError } = require('../service/generateError');
const sendMail = require('../controllers/sendMail');
const newUser = async (req, res, next) => {
  let conexion;
  try {
    conexion = await getDb();
    const { nombre, username, biografia, avatar, email, pwd } = req.body;

    const [userExist] = await conexion.query(
      `SELECT * FROM users WHERE email=?`,
      [email]
    );
    if (userExist.length > 0) {
      throw generateError('El usuario ya existe', 500);
    }
    const [user] = await conexion.query(
      `
    INSERT INTO users (
      nombre, username, biografia, avatar, email, pwd
    ) VALUES (?,?,?,?,?,SHA2(?,512))
    `,
      [nombre, username, biografia, avatar, email, pwd]
    );

    const [getIdUser] = await conexion.query(
      `SELECT id FROM users WHERE email='${email}'`,
      [email]
    );

    // console.log(getIdUser);

    res.send({
      status: 'ok',
      menssage:
        'Usuario creado correctamente, revisa tu email para la confirmacion',
    });

    sendMail(getIdUser[0].id, email);

    conexion.release();
  } catch (error) {
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = newUser;
