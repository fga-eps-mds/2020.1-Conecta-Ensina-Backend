const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    cpf: Joi.string().required().min(11).max(11),
    birthdate: Joi.date().required(),
    institution: Joi.string(),
    grade: Joi.number().integer().required(),
    cep: Joi.string().required().min(8).max(8),
    number: Joi.number().integer().required(),
    details: Joi.string(),
    description: Joi.string(),
    special: Joi.boolean(),
  }),
};

const statusValidation = {
  [Segments.PARAMS]: Joi.object().keys({
    status: Joi.number().integer().required()
  }),
};

module.exports = {
  createValidation,
  statusValidation
};
