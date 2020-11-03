module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('classrooms', [
      {
        /* Classroom Fixo */
        id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 1,
        cep: '72654321',
        number: 304,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Classroom future-fixo */
        id: 'aea297fb-32f6-4263-a735-84719fb6de12',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date((new Date()).getTime() + (10 * 86400000)),
        duration: 1,
        cep: '72654321',
        number: 304,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Classroom Teste */
        id: 'a30d2c7c-042d-40bd-96ab-0712ee33b5c1',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 2,
        cep: '72654321',
        number: 304,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '81be8201-4ea5-4c0a-b1e0-302787ed5f25',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 2,
        cep: '72654321',
        number: 304,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('classrooms', null, {});
  }
};
