
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        id: "79ce51ad-1e5a-43b9-b71f-56cfe18d2253",
        first_name: 'Paulão',
        last_name: 'Administrador',
        email: 'paulaoadmin@gmail.com',
        password: 'paulaoadmin123',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
