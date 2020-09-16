import { Router } from 'express';
import { celebrate } from 'celebrate';

// Importing Validations
import {
    loginValidation,
} from '../validations/userValidations'

// Importing Controllers
import {
    login
} from '../controllers/userControllers';

const userRoutes = new Router();

userRoutes.get('/login', /*celebrate(loginValidation),*/ login);

export default userRoutes;
