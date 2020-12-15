const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    text: Joi.string().required(),
    classroom_id: Joi.string().required(),
    student_id: Joi.string().required(),
    teacher_id: Joi.string().required(),
    create_by: Joi.string().required(),
  }),
};

const chatValidation = {
  [Segments.PARAMS]: Joi.object().keys({
    classroom_id: Joi.string().required(),
  }),
};

module.exports = {
  createValidation,
  chatValidation,
};
