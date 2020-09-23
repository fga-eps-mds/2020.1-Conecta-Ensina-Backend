const userRoutes = require('express').Router();

// Importing Validations
const {
    celebrate
} = require('celebrate');

const {
    loginValidation
} = require('../validations/userValidations');

// Importing Controllers
const UserController = require('../controllers/userController');

userRoutes.get('/login', celebrate(loginValidation), UserController.login);

module.exports = userRoutes;
