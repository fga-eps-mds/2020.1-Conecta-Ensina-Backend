const messageRoutes = require('express').Router();

const {
  celebrate
} = require('celebrate');

const {
  idValidation
} = require('../validations/utilValidations');

const {
  createValidation,
  chatValidation
} = require('../validations/messageValidations');

// Importing Controllers
const MessageController = require('../controllers/messageController');

messageRoutes.post('/create', celebrate(createValidation), MessageController.create);
messageRoutes.get('/:id', celebrate(idValidation), MessageController.read);
messageRoutes.get('/chat/:classroom_id', celebrate(chatValidation), MessageController.chat);

module.exports = messageRoutes;
