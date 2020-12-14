module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('messages', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
        },
        text: {
          allowNull: false,  
          type: Sequelize.STRING
        },
        classroom_id: {
          allowNull: false,  
          type: Sequelize.STRING,
          references: {
            model: {
              tableName: 'classrooms'
            },
            key: 'id'
          }
        },
        student_id: {
          allowNull: false,  
          type: Sequelize.STRING,
          references: {
            model: {
              tableName: 'students'
            },
            key: 'id'
          }
        },
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
        create_by: {
          allowNull: false, 
          type: Sequelize.STRING,
          references: {
            model: {
              tableName: 'users'
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
      await queryInterface.dropTable('messages');
    }
  };
  