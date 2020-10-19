const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    cpf: Joi.string().required().min(11).max(11),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    cellphone: Joi.string().required().min(11).max(13),
    role: Joi.number().integer().required()
  }),
};

module.exports = {
  createValidation
};
