
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Paulão',
        lastName: 'Administrador',
        email: 'paulaoadmin@gmail.com',
        password: 'paulaoadmin123',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
