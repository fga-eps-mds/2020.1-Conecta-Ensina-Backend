const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    grade: Joi.number().integer().required(),
    institution: Joi.string(),
    cep: Joi.string().required().min(8).max(8),
    number: Joi.number().integer().required(),
    details: Joi.string(),
    description: Joi.string(),
    birthdate: Joi.date().required(),
    special: Joi.boolean(),
  }),
};

module.exports = {
  createValidation
};
