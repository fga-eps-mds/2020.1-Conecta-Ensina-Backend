module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teacher_subjects', {
      id_teacher: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'teachers'
          },
          key: 'id'
        }
      },
      id_subject: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'subject'
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('teacher_subjects', {
      cascade: true,
    });
  }
};
