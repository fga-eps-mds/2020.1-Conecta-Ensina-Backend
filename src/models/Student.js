const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const User = require('./User');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Student = sequelize.define('Student', {
  cpf: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  institution: DataTypes.STRING,
  grade: DataTypes.INTEGER,
  cep: DataTypes.STRING,
  number: DataTypes.INTEGER,
  details: DataTypes.STRING,
  description: DataTypes.TEXT,
  special: DataTypes.BOOLEAN,
  status: DataTypes.INTEGER
}, {
  sequelize,
  paranoid: true,
});

Student.belongsTo(User, { foreignKey: 'id' });

module.exports = Student;
