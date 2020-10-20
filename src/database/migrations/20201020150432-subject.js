
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('subjects', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        grade: {
          /* Grades:
           * 1 fundamental 1
           * 2 fundamental 2
           * 3 highschool
           * 4 graduation
           */
          allowNull: false,
          type: Sequelize.INTEGER
        },
        name: {
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
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('subjects', {
        cascade: true,
      });
    }
  };