module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('teachers', [
      {
        /* Professor Fixo */
        id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        bank: 'Banco do Brasil',
        agency: '1778-7',
        account: '50043-5',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Professor Teste */
        id: 'c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed',
        photo: 'photo2.jpg',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        graduation_area: 'Matemática',
        degree: 'diploma2.pdf',
        bank: 'Banco do Brasil',
        agency: '1778-7',
        account: '50043-5',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teachers', null, {});
  }
};
