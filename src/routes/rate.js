const rateRoutes = require('express').Router();

// Importing Validations
const {
  celebrate
} = require('celebrate');

const {
  rateValidation
} = require('../validations/rateValidations');

// Importing Controllers
const RateController = require('../controllers/rateController');

rateRoutes.post('/', celebrate(rateValidation), RateController.create);

module.exports = rateRoutes;
