'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('teachers', [
      {
        id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'Banco do Brasil',
        agency: '1778-7',
        account: '50043-5',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'dfd29066-cd25-485c-8722-b429291d0ea3',
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'Banco do Brasil',
        agency: '1778-7',
        account: '50043-5',
        created_at: new Date(),
        updated_at: new Date(),
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teachers', null, {});
  }
};
