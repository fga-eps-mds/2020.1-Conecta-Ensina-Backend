module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('complains', [
      // complain fixo
      {
        id: 'c98f55fe-d902-4d6c-be99-f69c22c40fcc',
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        reported_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        details: 'Não compareceu',
        updated_at: new Date(),
        created_at: new Date(),
      },

      // complain test
      {
        id: '91c1596e-3bf2-486f-b0be-894661f32463',
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        reported_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        details: 'Não compareceu',
        updated_at: new Date(),
        created_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('complains', null, {});
  }
};
