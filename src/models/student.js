'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    grade: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    cpf: DataTypes.BIGINT,
    cep: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    details: DataTypes.STRING,
    description: DataTypes.TEXT,
    adulthood: DataTypes.BOOLEAN,
    special: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};