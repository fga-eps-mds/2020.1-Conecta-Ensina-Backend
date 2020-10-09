const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    grade: Joi.number().integer().required(),
    institution: Joi.string().required(),
    cep: Joi.string().required(),
    cpf: Joi.string().required(),
    number: Joi.number().integer().required(),
    details: Joi.string().required(),
    description: Joi.string().required(),
    adulthood: Joi.boolean().required(),
    special: Joi.string(),
  }),
};

module.exports = {
  createValidation
};
