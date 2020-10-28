const subjectRoutes = require('express').Router();

// Importing Validations
const {
  celebrate
} = require('celebrate');

const {
  idValidation
} = require('../validations/utilValidations');

const {
  createValidation,
  editValidation
} = require('../validations/subjectValidations');

// Importing Controllers
const SubjectController = require('../controllers/subjectController');

subjectRoutes.get('/', celebrate(editValidation), SubjectController.index);
subjectRoutes.post('/create', celebrate(createValidation), SubjectController.create);
subjectRoutes.get('/:id', celebrate(idValidation), SubjectController.read);
subjectRoutes.put('/:id', celebrate(editValidation), celebrate(idValidation), SubjectController.update);
subjectRoutes.delete('/:id', celebrate(idValidation), SubjectController.delete);

module.exports = subjectRoutes;
