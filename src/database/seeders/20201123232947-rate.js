module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('rates', [
      {
        /* Avaliação Fixa */
        id: '300cafcb-1c47-4d73-8e41-49cdd44d115a',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        class_id: '95a694c6-0338-4510-ac4c-f1aa1d693a57',
        rate: 4,
        rate_creator: 3,
        comments: 'boa aula, foi top',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('rates', null, {});
  }
};
