
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Users', [
      {
        id: "79ce51ad-1e5a-43b9-b71f-56cfe18d2253",
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
