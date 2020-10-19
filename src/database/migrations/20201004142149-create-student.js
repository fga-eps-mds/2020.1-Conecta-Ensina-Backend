'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      grade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      institution: {
        type: Sequelize.STRING
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      details: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      special: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};