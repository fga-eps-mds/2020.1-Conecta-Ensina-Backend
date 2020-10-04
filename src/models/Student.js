const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Student = sequelize.define('Student', {
    
    grade: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    cpf: DataTypes.BIGINT,
    cep: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    details: DataTypes.STRING,
    description: DataTypes.TEXT,
    adulthood: DataTypes.BOOLEAN,
    special: DataTypes.STRING

  }, {});
  module.exports = Student;