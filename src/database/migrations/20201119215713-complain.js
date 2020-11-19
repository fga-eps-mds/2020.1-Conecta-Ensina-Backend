module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('complains', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      accused: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'students'
          },
          key: 'id'
        }
      },
      reported_by: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'students'
          },
          key: 'id'
        }
      },
      details: {
        allowNull: false,
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
    await queryInterface.dropTable('complains', {
      cascade: true,
    });
  }
};