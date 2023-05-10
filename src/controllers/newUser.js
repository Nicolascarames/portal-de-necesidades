const getDb = require('../database/db');
const Joi = require('joi');

const newUser = (req, res) => {
  console.log(req.body);
  const schema = Joi.object().keys({
    nombre: Joi.string().max(45).required(),
    username: Joi.string().max(45).required(),
    biografia: Joi.string().max(100),
    avatar: Joi.string().max(45),
    email: Joi.string().email().max(45).required(),
    token: Joi.string().max(50),
    pwd: Joi.string().min(8).max(45).required(),
    active: Joi.number(),
    role: Joi.string(),
    delete: Joi.number(),
    created_at: Joi.date().timestamp().required(),
    update_at: Joi.date().timestamp(),
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    console.error(validation.error.message);
  }
  res.end();
};

module.exports = newUser;
