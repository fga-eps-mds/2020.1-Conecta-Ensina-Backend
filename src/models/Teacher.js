const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Teacher = sequelize.define('Teacher', {
    institution: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cep: DataTypes.STRING,
    number: DataTypes.INTEGER,
    details: DataTypes.STRING,
    photo: DataTypes.BLOB,
    description: DataTypes.TEXT,
    video: DataTypes.STRING,
    graduation: DataTypes.STRING,
    graduationArea: DataTypes.STRING,
    degree: DataTypes.STRING,
    bank: DataTypes.STRING,
    agency: DataTypes.STRING,
    account: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  module.exports = Teacher;