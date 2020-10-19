
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        id: '79ce51ad-1e5a-43b9-b71f-56cfe18d2253',
        cpf: '12345678910',
        first_name: 'Paulão',
        last_name: 'Administrador',
        email: 'paulaoadmin@gmail.com',
        password: 'paulaoadmin123',
        cellphone: '61999999999',
        role: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        cpf: '10987654321',
        first_name: 'Mateuzao',
        last_name: 'Aluno',
        email: 'mateuzaoaluno@gmail.com',
        password: 'mateuzaoaluno777',
        cellphone: '62999999999',
        role: 2,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
