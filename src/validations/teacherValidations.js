const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    institution: Joi.string().required(),
    cep: Joi.number().integer().required(),
    cpf: Joi.number().integer().required(),
    number: Joi.number().integer().required(),
    details: Joi.string(),
    photo: Joi.binary(),
    description: Joi.string().required(),
    video: Joi.string(),
    graduation: Joi.string().required(),
    graduationArea: Joi.string().required(),
    degree: Joi.string().required(),
    bank: Joi.string().required(),
    agency: Joi.string().required(),
    account: Joi.string().required(),
    status: Joi.number().integer().required(),
  }),
};

module.exports = {
  createValidation
};
