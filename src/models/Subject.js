const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Subject = sequelize.define('Subject', {
    grade: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
  });

module.exports = Subject;
