const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const Student = require('./Student');
const Teacher = require('./Teacher');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const TeacherSubject = sequelize.define('teacher_subject', {
  teacher_id: DataTypes.STRING,
  subject_id: DataTypes.INTEGER
}, {
  sequelize,
  paranoid: true,
});

TeacherSubject.belongsTo(Teacher, { foreignKey: 'teacher_id' });
TeacherSubject.belongsTo(Student, { foreignKey: 'subject_id' });

TeacherSubject.removeAttribute('id');

module.exports = TeacherSubject;
