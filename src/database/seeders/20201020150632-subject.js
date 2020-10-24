'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subjects', [
      {
        /* Matéria Fixa */
        id: 1,
        grade: 3,
        name: 'Álgebra Fixa',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Matéria Teste */
        id: 2,
        grade: 3,
        name: 'Álgebra Teste',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subjects', null, {});
  }
};
