const teacherRoutes = require('express').Router();

// Importing Validations
const {
    celebrate
} = require('celebrate');

const {
    idValidation
} = require('../validations/utilValidations');

const {
    createValidation
} = require('../validations/teacherValidations');

// Importing Controllers
const TeacherController = require('../controllers/teacherController');

teacherRoutes.post('/create', celebrate(createValidation), TeacherController.create);
teacherRoutes.get('/:id', celebrate(idValidation), TeacherController.read);
teacherRoutes.put('/:id', celebrate(idValidation), TeacherController.update);
teacherRoutes.delete('/:id', celebrate(idValidation), TeacherController.delete);

module.exports = teacherRoutes;
