const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const Student = require('./Student');
const Classroom = require('./Classroom');
const Teacher = require('./Teacher');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Rate = sequelize.define('Rate', {
  rate: DataTypes.INTEGER,
  rate_creator: DataTypes.INTEGER,
  teacher: DataTypes.STRING,
  student: DataTypes.STRING,
  class_id: DataTypes.STRING,
  comments: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

Rate.belongsTo(Teacher, { foreignKey: 'teacher' });
Rate.belongsTo(Student, { foreignKey: 'student' });
Rate.belongsTo(Classroom, { foreignKey: 'class_id' });

module.exports = Rate;
