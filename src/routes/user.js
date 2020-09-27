const userRoutes = require('express').Router();

// Importing Validations
const {
    celebrate
} = require('celebrate');

const {
    idValidation
} = require('../validations/utilValidations');

const {
    createValidation
} = require('../validations/userValidations');

// Importing Controllers
const UserController = require('../controllers/userController');
const User = require('../models/User');

userRoutes.post('/create', celebrate(createValidation), UserController.create);
userRoutes.get('/:id', celebrate(idValidation), UserController.show);
userRoutes.put('/:id',celebrate(idValidation), UserController.update);
userRoutes.delete('/:id', celebrate(idValidation), UserController.delete);

module.exports = userRoutes;
