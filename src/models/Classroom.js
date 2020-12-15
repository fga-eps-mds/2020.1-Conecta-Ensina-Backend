const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const Student = require('./Student');
const Teacher = require('./Teacher');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Classroom = sequelize.define('Classroom', {
  teacher: DataTypes.STRING,
  student: DataTypes.STRING,
  grade: DataTypes.INTEGER,
  subject: DataTypes.INTEGER,
  dtclass: DataTypes.DATE,
  duration: DataTypes.INTEGER,
  cep: DataTypes.STRING,
  number: DataTypes.INTEGER,
  details: DataTypes.STRING,
  status: DataTypes.INTEGER,
  timer: DataTypes.STRING
}, {
  sequelize,
  paranoid: true,
});

Classroom.belongsTo(Teacher, { foreignKey: 'teacher' });
Classroom.belongsTo(Student, { foreignKey: 'student' });

module.exports = Classroom;
