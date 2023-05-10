const Joi = require('joi');

const dataValidation = (req, res, next) => {
  try {
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
      created_at: Joi.date().timestamp(),
      update_at: Joi.date().timestamp(),
    });

    const validation = schema.validate(req.body);
    console.log(validation);
    if (validation.error) {
      res.send(validation.error.message);
      return;
    }

    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = dataValidation;
