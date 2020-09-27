const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const idValidation = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }),
};

module.exports = {
    idValidation,
};
  