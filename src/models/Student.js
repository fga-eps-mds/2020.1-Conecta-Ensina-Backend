const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Student = sequelize.define('Student', {
    
    grade: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    cep: DataTypes.STRING,
    number: DataTypes.INTEGER,
    details: DataTypes.STRING,
    description: DataTypes.TEXT,
    birthdate: DataTypes.DATE,
    special: DataTypes.STRING

  }, {
    sequelize,
    paranoid: true,
  });
  module.exports = Student;