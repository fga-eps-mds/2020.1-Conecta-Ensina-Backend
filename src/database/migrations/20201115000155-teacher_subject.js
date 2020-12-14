module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teacher_subjects', {
      teacher_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'teachers'
          },
          key: 'id'
        }
      },
      subject_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'subjects'
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
