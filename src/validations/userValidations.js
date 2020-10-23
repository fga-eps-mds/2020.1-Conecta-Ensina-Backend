const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    cellphone: Joi.string().required().min(11).max(13),
    role: Joi.number().integer().required()
  }),
};

const loginValidation = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8)
  }),
};

module.exports = {
  createValidation,
  loginValidation
};
