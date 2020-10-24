const bcrypt = require('bcrypt');

const saltRounds = Number(process.env.SALT_ROUNDS);
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: '79ce51ad-1e5a-43b9-b71f-56cfe18d2253',
        first_name: 'Administrador',
        last_name: 'Fixo',
        cellphone: '61999999999',
        email: 'admin@fixo.com',
        password: bcrypt.hashSync('adminfixo123', salt),
        role: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        first_name: 'Teacher',
        last_name: 'Fixo',
        cellphone: '61999999999',
        email: 'teacher@fixo.com',
        password: bcrypt.hashSync('teacherfixo123', salt),
        role: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        first_name: 'Aluno',
        last_name: 'Fixo',
        cellphone: '61999999999',
        email: 'aluno@fixo.com',
        password: bcrypt.hashSync('alunofixo123', salt),
        role: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '98ff6e63-cfbe-4bbd-9789-2dcf023b8251',
        first_name: 'Usuário',
        last_name: 'Teste',
        cellphone: '61999999999',
        email: 'usuario@teste.com',
        password: bcrypt.hashSync('usuarioteste123', salt),
        role: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed',
        first_name: 'Teacher',
        last_name: 'Teste',
        cellphone: '61999999999',
        email: 'teacher@teste.com',
        password: bcrypt.hashSync('teacherteste123', salt),
        role: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'dfd29066-cd25-485c-8722-b429291d0ea3',
        first_name: 'Aluno',
        last_name: 'Teste',
        cellphone: '61999999999',
        email: 'aluno@teste.com',
        password: bcrypt.hashSync('alunoteste123', salt),
        role: 3,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
