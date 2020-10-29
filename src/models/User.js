const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  cellphone: DataTypes.STRING,
  role: DataTypes.INTEGER
}, {
  sequelize,
  paranoid: true,
});

User.associate = (models) => {
  User.hasOne(models.Student,{
    as: 'user',
    foreignKey: 'id'
    });
};

module.exports = User;
