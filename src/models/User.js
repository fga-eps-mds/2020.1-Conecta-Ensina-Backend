const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  // Users.associate = function(models) {
  //   // associations can be defined here
  //   // User.hasMany(models.Comment, {
  //   //   foreignKey: 'userId',
  //   //   as: 'comments',
  //   //   onDelete: 'CASCADE',
  //   // });
  // };
module.exports = User;
