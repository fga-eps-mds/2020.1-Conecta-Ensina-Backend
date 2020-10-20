'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('classes', [
      {
        id: 1,
        teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 1,
        cep: '73854647',
        number: 304,
        details: 1,
        status: 1,
        timer: '02:00:00',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classes', null, {});
  }
};
