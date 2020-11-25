module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rates', {
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
      class_id: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'classrooms'
          },
          key: 'id'
        }
      },
      comments: {
        type: Sequelize.TEXT
      },
      rate: {
        type: Sequelize.INTEGER
      },
      /* Creator:
      * 2 - Teacher
      * 3 - Student
      */
      rate_creator: {
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('rates', { cascade: true });
  }
};
