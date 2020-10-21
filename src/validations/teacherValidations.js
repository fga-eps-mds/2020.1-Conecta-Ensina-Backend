const {
  Segments,
  Joi,
} = require('celebrate');

const createValidation = {
  [Segments.BODY]: Joi.object().keys({
    photo: Joi.binary(),
    video: Joi.string(),
    graduation_area: Joi.string().required(),
    degree: Joi.string().required(),
    description: Joi.string().required(),
    bank: Joi.string().required(),
    agency: Joi.string().required(),
    account: Joi.string().required(),
  }),
};

module.exports = {
  createValidation
};
