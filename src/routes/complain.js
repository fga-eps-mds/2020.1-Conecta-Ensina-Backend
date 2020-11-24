const complainRoutes = require('express').Router();

const {
  celebrate
} = require('celebrate');

const {
  idValidation
} = require('../validations/utilValidations');

const {
  createValidation
} = require('../validations/complainValidations');

// Importing Controllers
const ComplainController = require('../controllers/complainController');

complainRoutes.post('/create', celebrate(createValidation), ComplainController.create);
complainRoutes.get('/:id', celebrate(idValidation), ComplainController.read);
complainRoutes.put('/:id', celebrate(createValidation), celebrate(idValidation), ComplainController.update);
complainRoutes.delete('/:id', celebrate(idValidation), ComplainController.delete);

module.exports = complainRoutes;
