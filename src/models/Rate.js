const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

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

module.exports = Rate;
