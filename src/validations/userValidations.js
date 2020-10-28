const {
  Segments,
  Joi,
} = require('celebrate');

const userValidation = {
  [Segments.BODY]: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    cellphone: Joi.string().required().min(11).max(13)
  }),
};

const loginValidation = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8)
  }),
};

module.exports = {
  userValidation,
  loginValidation
};
