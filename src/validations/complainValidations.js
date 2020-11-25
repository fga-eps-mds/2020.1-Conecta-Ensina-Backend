const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    accused: Joi.string().required(),
    details: Joi.string().required(),
    reported_by: Joi.string().required(),
  }),
};

module.exports = {
  createValidation
};
