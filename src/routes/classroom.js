const classroomRoutes = require('express').Router();

// Importing Validations
const {
  celebrate
} = require('celebrate');

const {
  idValidation
} = require('../validations/utilValidations');

const {
  createValidation
} = require('../validations/classroomValidations');
// Importing Controllers
const ClassroomController = require('../controllers/classroomController');

classroomRoutes.post('/', ClassroomController.index);
classroomRoutes.post('/create', celebrate(createValidation), ClassroomController.create);
classroomRoutes.get('/:id', celebrate(idValidation), ClassroomController.read);
classroomRoutes.put('/:id', celebrate(createValidation), celebrate(idValidation), ClassroomController.update);
classroomRoutes.delete('/:id', celebrate(idValidation), ClassroomController.delete);
classroomRoutes.get('/statusClass/:id/:status', ClassroomController.statusClass);
classroomRoutes.get('/nextClass/:student', ClassroomController.nextClass);
classroomRoutes.get('/userClasses/:id', ClassroomController.userClasses);
classroomRoutes.put('/status/:id', celebrate(idValidation), ClassroomController.statusUpdate);

module.exports = classroomRoutes;
