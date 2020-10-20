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
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      institution: {
        type: Sequelize.STRING
      },
      grade: {
        /* Grades:
         * 1 fundamental 1
         * 2 fundamental 1
         * 3 fundamental 1
         * 4 fundamental 1
         * 5 fundamental 1
         * 6 fundamental 2
         * 7 fundamental 2
         * 8 fundamental 2
         * 9 fundamental 2
         * 10 fundamental complete
         * 11 highschool 1
         * 12 highschool 2
         * 13 highschool 3
         * 14 highschool complete
         * 15 in graduation
         * 16 graduate
         * 17 in postgradutaion
         * 18 postgraduate
         * 19 in masters
         * 20 master
         */
        allowNull: false,
        type: Sequelize.INTEGER
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
      special: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        /* Status:
         * -1 - banned
         * 0 - pending
         * 1 - normal
         * 2 - reported
         */
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('students', {
      cascade: true,
    });
  }
};