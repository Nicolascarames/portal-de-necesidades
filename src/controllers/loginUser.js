const getDB = require('../database/db');
const tokenJson = require('jsonwebtoken');
require('dotenv').config();

const loginUser = async (req, res) => {
  try {
    const conexion = await getDB();

    const { email, pwd } = req.body;
    console.log(email,pwd)
    if (!email || !pwd) {
      res.status(400).send('faltan datos');
    }

    const [user] = await conexion.query(
      `
            SELECT id, role
            FROM users
            WHERE email = ? AND pwd = SHA2(?,512)
            `,
      [email, pwd]
    );

    console.log(user);
    if (user.length === 0) {
      return res.status(401).send('Email o pwd incorrentos');
    }

    // token

    const info = {
      id: user[0].id,
      role: user[0].role,
    };

    const token = tokenJson.sign(info, process.env.secret_token, {
      expiresIn: '1d',
    });

    res.status(200).send({
      status: 'ok',
      message: 'login',
      data: {
        token,
      },
    });
    conexion.release();
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

module.exports = loginUser;
