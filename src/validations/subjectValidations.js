const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const createValidation = {
    [Segments.BODY]: Joi.object().keys({
      grade: Joi.number().integer().required(),
      name: Joi.string().required(),
    }),
  };
  
module.exports = {
  createValidation
};
