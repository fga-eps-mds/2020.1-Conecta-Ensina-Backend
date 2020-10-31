const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Student tests', () => {
  it('Teste updateStatus correto', async (done) => {
    const response = await request(app)
      .put('/api/student/status/dfd29066-cd25-485c-8722-b429291d0ea3')
      .send({
        status: '1',
        agentRole: 1
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('should denied updateStatus student', async (done) => {
    const response = await request(app)
      .put('/api/student/status/dfd29066-cd25-485c-8722-b429291d0ea3')
      .send({
        status: '1',
        agentRole: 2
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it('Teste updateStatus incorreto', async (done) => {
    const response = await request(app)
      .put('/api/student/status/dfd29066-cd25-485c-8722-b429291d0ea3wrong')
      .send({
        status: '1',
        agentRole: 1
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Professor não encontrado!');
    done();
  });

  it('Teste status correto', async (done) => {
    const response = await request(app)
      .get('/api/student/status/1')
      .send({ agentRole: 1});

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('student');
    done();
  });

  it('Teste status sem pendencia', async (done) => {
    const response = await request(app)
      .get('/api/student/status/4567')
      .send({ agentRole: 1});

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Nenhum professor pendente');
    done();
  });

  it('should denied status student', async (done) => {
    const response = await request(app)
      .get('/api/student/status/4567')
      .send({ agentRole: 2});

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it('should create student', async (done) => {
    const response = await request(app)
      .post('/api/student/create')
      .send({
        firstName: 'Aluno',
        lastName: 'Qualquer',
        cellphone: '61987654321',
        email: 'aluno@qualquer.com',
        password: 'alunoqualquer123',
        cpf: '12345678999',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Católica',
        grade: 7,
        cep: '72123123',
        number: 4,
        special: false,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.student).toHaveProperty('id');
    done();
  });

  it('should failed create student', async (done) => {
    const response = await request(app)
      .post('/api/student/create')
      .send({
        firstName: 'Aluno2',
        lastName: 'Qualquer',
        cellphone: '61987654321',
        email: 'aluno2@qualquer.com',
        password: 'aluno2qualquer123',
        cpf: '10987654321',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '72123123',
        number: 4,
        special: false,
      });

    expect(response.status).toBe(400);
    done();
  });

  it('should read student', async (done) => {
    const response = await request(app)
      .get('/api/student/3bd7c190-ce64-4827-8c0c-58cfef45ad9f');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('student');
    done();
  });

  it('should failed in read student', async (done) => {
    const response = await request(app)
      .get('/api/student/3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Estudante não encontrado!');
    done();
  });

  it('should update student', async (done) => {
    const response = await request(app)
      .put('/api/student/3bd7c190-ce64-4827-8c0c-58cfef45ad9f')
      .send({
        agentRole: 3,
        cpf: '10123456789',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '12345678',
        number: 4,
        special: false
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Atualizado com sucesso');
    done();
  });

  it('should denied update student', async (done) => {
    const response = await request(app)
      .put('/api/student/3bd7c190-ce64-4827-8c0c-58cfef45ad9f')
      .send({
        agentRole: 2,
        cpf: '10123456789',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '12345678',
        number: 4,
        special: false
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it('should failed in update student', async (done) => {
    const response = await request(app)
      .put('/api/student/dfd29066-cd25-485c-8722-b429291d0ea3wrong')
      .send({
        agentRole: 3,
        cpf: '10123456789',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '12345678',
        number: 4,
        special: false
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Estudante não encontrado!');
    done();
  })

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/student/dfd29066-cd25-485c-8722-b429291d0ea3')
      .send({agentRole: 1});

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });
  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/student/dfd29066-cd25-485c-8722-b429291d0ea3wrong')
      .send({agentRole: 1});

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Estudante não encontrado!');
    done();
  });
});
