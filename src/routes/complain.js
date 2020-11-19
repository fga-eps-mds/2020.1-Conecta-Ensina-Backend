const complainRoutes = require('express').Router();





// Importing Controllers
const ComplainController = require('../controllers/complainController');


complainRoutes.post('/create', ComplainController.create);
complainRoutes.get('/:id', ComplainController.read);
complainRoutes.put('/:id', ComplainController.update);
complainRoutes.delete('/:id', ComplainController.delete);

module.exports = complainRoutes;