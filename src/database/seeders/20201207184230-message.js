module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('messages', [
      // Texto teste Olá
      {
        id: '0fec04a5-23da-4d8e-8c31-12865d0b47a0',
        text: 'olá',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        created_at: '2020-12-07T21:13:34.703Z',
        updated_at: '2020-12-07T21:13:34.703Z',
        deleted_at: null
      },
      {
        id: '5b3e9458-ec1b-48df-bcdd-af2df2873e76',
        text: 'eae',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        created_at: '2020-12-07T21:19:35.470Z',
        updated_at: '2020-12-07T21:19:35.470Z',
        deleted_at: null
      },
      {
        id: 'c289a965-946a-4abb-9100-2fa3d4e6a6e8',
        text: 'aula hj',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        created_at: '2020-12-07T21:19:44.103Z',
        updated_at: '2020-12-07T21:19:44.103Z',
        deleted_at: null
      },
      {
        id: 'b30871be-0b74-40ab-974c-b1abd4b1a046',
        text: 'sim',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        created_at: '2020-12-07T21:32:23.803Z',
        updated_at: '2020-12-07T21:32:23.803Z',
        deleted_at: null
      },
      {
        id: '6861aaa5-5eff-4e3b-a1a3-5f4f0a577ac1',
        text: 'okay',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        created_at: '2020-12-07T21:32:29.375Z',
        updated_at: '2020-12-07T21:32:29.375Z',
        deleted_at: null
      },
      {
        id: 'a9caf652-0145-48e6-adaa-3d290814cb67',
        text: 'okay',
        classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        created_at: '2020-12-07T21:32:30.375Z',
        updated_at: '2020-12-07T21:32:30.375Z',
        deleted_at: null
      },
      {
        id: 'f7a03682-483b-4cf5-abcd-ede2ef85a551',
        text: 'oi',
        classroom_id: 'aea297fb-32f6-4263-a735-84719fb6de12',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        created_at: '2020-12-07T21:32:30.375Z',
        updated_at: '2020-12-07T21:32:30.375Z',
        deleted_at: null
      },
      {
        id: '6fe025a3-2a1c-480a-851d-d24100b0b889',
        text: 'oi',
        classroom_id: 'aea297fb-32f6-4263-a735-84719fb6de12',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        created_at: '2020-12-07T21:32:31.375Z',
        updated_at: '2020-12-07T21:32:31.375Z',
        deleted_at: null
      },
      {
        id: 'c447b874-fdab-4529-a5d2-ff789c107638',
        text: 'terei que cancelar a aula de hoje',
        classroom_id: 'aea297fb-32f6-4263-a735-84719fb6de12',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        created_at: '2020-12-07T21:32:32.375Z',
        updated_at: '2020-12-07T21:32:32.375Z',
        deleted_at: null
      },
      {
        id: '339b7e99-8437-4359-a5e6-2c4c19869872',
        text: 'okay',
        classroom_id: 'aea297fb-32f6-4263-a735-84719fb6de12',
        student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        create_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        created_at: '2020-12-07T21:32:33.375Z',
        updated_at: '2020-12-07T21:32:33.375Z',
        deleted_at: null
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('messages', null, {});
  }
};
