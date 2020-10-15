'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      photo: {
        type: Sequelize.BLOB
      },
      description: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      graduation: {
        type: Sequelize.STRING
      },
      graduationArea: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      agency: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
        /*
        0 - pending registration
        1 - active teacher
        2 - teacher in analysis
        3 - blocked teacher
        */
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
    await queryInterface.dropTable('Teachers');
  }
};