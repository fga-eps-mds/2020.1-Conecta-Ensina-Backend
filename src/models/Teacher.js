const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Teacher = sequelize.define('Teacher', {
  photo: DataTypes.BLOB,
  video: DataTypes.STRING,
  graduation_area: DataTypes.STRING,
  degree: DataTypes.STRING,
  bank: DataTypes.STRING,
  agency: DataTypes.STRING,
  account: DataTypes.STRING
}, {
  sequelize,
  paranoid: true,
});

module.exports = Teacher;
