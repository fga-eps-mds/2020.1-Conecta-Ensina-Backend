const {
  Segments,
  Joi,
} = require('celebrate');

const createStudentValidation = {
  [Segments.BODY]: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    cellphone: Joi.string().required().min(11).max(13),
    cpf: Joi.string().required().min(11).max(11),
    birthdate: Joi.date().required(),
    institution: Joi.string(),
    grade: Joi.number().integer().required(),
    cep: Joi.string().required().min(8).max(8),
    number: Joi.number().integer().required(),
    details: Joi.string(),
    description: Joi.string(),
    special: Joi.boolean()
  })
};

const studentValidation = {
  [Segments.BODY]: Joi.object().keys({
    agentRole: Joi.number().integer().required(),
    cpf: Joi.string().required().min(11).max(11),
    birthdate: Joi.date().required(),
    institution: Joi.string(),
    grade: Joi.number().integer().required(),
    cep: Joi.string().required().min(8).max(8),
    number: Joi.number().integer().required(),
    details: Joi.string(),
    description: Joi.string(),
    special: Joi.boolean()
  })
};

const statusValidation = {
  [Segments.PARAMS]: Joi.object().keys({
    status: Joi.number().integer().required()
  }),
};

module.exports = {
  createStudentValidation,
  studentValidation,
  statusValidation
};
