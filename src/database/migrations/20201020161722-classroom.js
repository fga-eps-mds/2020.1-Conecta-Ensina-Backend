module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classrooms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      teacher: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'teachers'
          },
          key: 'id'
        }
      },
      student: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'students'
          },
          key: 'id'
        }
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
      subject: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'subjects'
          },
          key: 'id'
        }
      },
      dtclass: {
        allowNull: false,
        type: Sequelize.DATE
      },
      duration: {
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
      status: {
        /* Status:
             * -2 - canceled
             * -1 - declined
             * 0 - pending
             * 1 - acepted
             * 2 - pending started
             * 3 - started
             * 4 - finished
             */
        allowNull: false,
        type: Sequelize.INTEGER
      },
      timer: {
        type: Sequelize.STRING
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('classrooms', {
      cascade: true,
    });
  }
};
