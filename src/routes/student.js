const studentRoutes = require('express').Router();

// Importing Validations
const {
    celebrate
} = require('celebrate');

const {
    idValidation
} = require('../validations/utilValidations');

const {
    createStudentValidation,
    studentValidation
} = require('../validations/studentValidations');

// Importing Controllers
const StudentController = require('../controllers/studentController');

studentRoutes.post('/create', celebrate(createStudentValidation), StudentController.create);
studentRoutes.get('/:id', celebrate(idValidation), StudentController.read);
studentRoutes.put('/:id', celebrate(idValidation), celebrate(studentValidation), StudentController.update);
studentRoutes.delete('/:id', celebrate(idValidation), StudentController.delete);

module.exports = studentRoutes;
