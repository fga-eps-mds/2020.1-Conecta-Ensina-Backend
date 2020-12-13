const {
  Segments,
  Joi,
} = require('celebrate');

const rateValidation = {
  [Segments.BODY]: Joi.object().keys({
    teacher: Joi.string().required(),
    student: Joi.string().required(),
    /* Creator:
    * 2 - Teacher
    * 3 - Student
    */
    rate_creator: Joi.number().required(),
    rate: Joi.number(),
    class_id: Joi.string().required(),
    comments: Joi.string().required(),
  }),
};

module.exports = {
  rateValidation
};
