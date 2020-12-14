const {
  Segments,
  Joi,
} = require('celebrate');

const createTeacherValidation = {
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
    special: Joi.boolean(),
    photo: Joi.binary(),
    video: Joi.string(),
    graduation_area: Joi.string().required(),
    degree: Joi.string().required(),
    bank: Joi.string().required(),
    agency: Joi.string().required(),
    account: Joi.string().required(),
    subjects: Joi.array().required(),
  })
};

const teacherValidation = {
  [Segments.BODY]: Joi.object().keys({
    agentRole: Joi.number().integer().required(),
    photo: Joi.binary(),
    video: Joi.string(),
    graduation_area: Joi.string().required(),
    degree: Joi.string().required(),
    bank: Joi.string().required(),
    agency: Joi.string().required(),
    account: Joi.string().required(),
  })
};

const subjectValidation = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  }),
};

module.exports = {
  createTeacherValidation,
  teacherValidation,
  subjectValidation
};
