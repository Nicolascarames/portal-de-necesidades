const jwt = require('jsonwebtoken');
const { generateError } = require('../service/generateError');

const isUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw generateError('Falta cabezera de autorizacion', 401);
    }

    let token;
    try {
      token = jwt.verify(authorization, process.env.secret_token);
    } catch {
      throw generateError('token incorrecto', 401);
    }

    //meto info del token en req para usarla en controllers
    req.isUser = token;

    // console.log(token);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isUser;
