require('dotenv/config');
const application = require('./app');

application.listen(process.env.APP_PORT);
