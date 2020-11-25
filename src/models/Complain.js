const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Complain = sequelize.define('Complain', {
  accused: DataTypes.STRING,
  details: DataTypes.STRING,
  reported_by: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

module.exports = Complain;
