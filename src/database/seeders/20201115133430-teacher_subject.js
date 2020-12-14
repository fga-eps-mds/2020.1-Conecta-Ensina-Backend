module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('teacher_subjects', [
      {
        /* Matéria Fixa */
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        subject_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teacher_subjects', null, {});
  }
};
