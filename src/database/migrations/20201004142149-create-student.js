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
         * 10 highschool 1
         * 11 highschool 2
         * 12 highschool 3
         * 13 highschool complete
         * 14 in graduation
         * 15 graduate
         * 16 in postgradutaion
         * 17 postgraduate
         * 18 in masters
         * 19 master
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