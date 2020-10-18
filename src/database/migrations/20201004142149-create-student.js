'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.INTEGER
      },
      institution: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      details: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      adulthood: {
        type: Sequelize.BOOLEAN
      },
      special: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};