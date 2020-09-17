const {
  Segments,
  Joi,
} = require('celebrate');

const loginValidation = {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
};

module.exports = {
  loginValidation,
};
