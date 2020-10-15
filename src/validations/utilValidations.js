const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const idValidation = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }),
};

const statusValidation = {
  [Segments.PARAMS]: Joi.object().keys({
    status: Joi.number().integer().required()
  }),
};

module.exports = {
    idValidation, statusValidation,
};
  