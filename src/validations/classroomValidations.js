const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    agentRole: Joi.number().integer().required(),
    teacher: Joi.string().required(),
    student: Joi.string().required(),
    grade: Joi.number().integer().required(),
    subject: Joi.number().integer().required(),
    dtclass: Joi.date().required(),
    duration: Joi.number().integer().required(),
    cep: Joi.string().required(),
    number: Joi.number().integer().required(),
    details: Joi.string(),
  }),
};

module.exports = {
  createValidation
};
