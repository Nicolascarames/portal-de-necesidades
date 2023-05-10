const getDb = require('../database/db');
const Joi = require('joi');
const { generateError } = require('../service/generateError');

const newUser = async (req, res, next) => {
  try {
    const conexion = await getDb();
    const { nombre, username, biografia, avatar, email, pwd } = req.body;

    const [userExist] = await conexion.query(
      `SELECT * FROM users WHERE email=?`,
      [email]
    );
    if (userExist.length > 0) {
      res.status(500).send('Usuario ya existe');
    }
    const [user] = await conexion.query(
      `
    INSERT INTO users (
      nombre, username, biografia, avatar, email, pwd
    ) VALUES (?,?,?,?,?,SHA2(?,512))
    `,
      [nombre, username, biografia, avatar, email, pwd]
    );

    res.send({
      status: 'ok',
      menssage: 'Usuario creado correctamente',
    });
    conexion.release();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = newUser;
