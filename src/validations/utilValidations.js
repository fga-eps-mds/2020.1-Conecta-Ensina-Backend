const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const idValidation = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required()
    }),
};

module.exports = {
    idValidation,
};
  