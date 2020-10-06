const application = require('./app');
const dotenv = require('dotenv').config();

application.listen(process.env.APP_PORT);
