const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const User = require('./User');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Classroom = require('./Classroom');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Message = sequelize.define('Message', {
  text: DataTypes.STRING,
  classroom_id: DataTypes.STRING,
  student_id: DataTypes.STRING,
  teacher_id: DataTypes.STRING,
  create_by: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});
Message.belongsTo(User, { foreignKey: 'create_by' });
Message.belongsTo(Student, { foreignKey: 'student_id' });
Message.belongsTo(Teacher, { foreignKey: 'teacher_id' });
Message.belongsTo(Classroom, { foreignKey: 'classroom_id' });

module.exports = Message;
