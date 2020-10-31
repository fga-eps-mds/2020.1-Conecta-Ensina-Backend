const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    id: Joi.number().integer().required(),
    grade: Joi.number().integer().required(),
    name: Joi.string().required(),
    agentRole: Joi.number().integer().required()
  })
};

const editValidation = {
  [Segments.BODY]: Joi.object().keys({
    grade: Joi.number().integer().required(),
    name: Joi.string().required(),
    agentRole: Joi.number().integer().required()
  })
};

module.exports = {
  createValidation,
  editValidation
};
