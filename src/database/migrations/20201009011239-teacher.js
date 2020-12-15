module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teachers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'students'
          },
          key: 'id'
        }
      },
      photo: {
        allowNull: false,
        type: Sequelize.BLOB,
      },
      video: {
        type: Sequelize.STRING
      },
      graduation_area: {
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
    await queryInterface.dropTable('teachers', {
      cascade: true,
    });
  }
};
