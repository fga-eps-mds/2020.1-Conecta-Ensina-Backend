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
        /* Classroom by status - Test */
        id: '0cb1e2e9-894e-4e68-86c7-7fc19583549f',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 2,
        cep: '72654321',
        number: 304,
        status: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Classroom by status - Fixo */
        id: '95a694c6-0338-4510-ac4c-f1aa1d693a57',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 3,
        cep: '72654321',
        number: 304,
        status: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        /* Classroom Teste Status Index/Update */
        id: '227b9e87-d080-4f80-af48-a0b9b6cd4d5a',
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 1,
        cep: '72654321',
        number: 304,
        status: 0,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('classrooms', null, {});
  }
};
