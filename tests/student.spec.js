const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Student tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .post('/api/students/98ff6e63-cfbe-4bbd-9789-2dcf023b8251')
      .send({
        cpf: "10123456789",
        birthdate: "2020-10-20T01:18:10.161Z",
        institution: "Catolica",
        grade: 7,
        cep: "12345678",
        number: 4,
        special: false,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.student).toHaveProperty("id");
    done();
  });

  it('Teste create incorreto', async (done) => {
    const response = await request(app)
      .post('/api/students/98ff6e63-cfbe-4bbd-9789-2dcf023b8251')
      .send({
        cpf: "12345678910",
        birthdate: "2020-10-20T01:18:10.161Z",
        institution: "Catolica",
        grade: 7,
        cep: "12345678",
        number: 4,
        special: false,
      });

    expect(response.status).toBe(400);
    done();
  });

  it('Teste read correto', async (done) => {
    const response = await request(app)
      .get('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9f');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("student");
    done();
  });

  it('Teste read incorreto', async (done) => {
    const response = await request(app)
      .get('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Estudante não encontrado!');
    done();
  });

  it('Teste edit correto', async (done) => {
    const response = await request(app)
      .put('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9f')
      .send({
        cpf: "12345678911",
        birthdate: "2018-10-20T01:18:10.161Z",
        institution: "Catolica",
        grade: 8,
        cep: "12345678",
        number: 4,
        special: false,
        status: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste edit incorreto', async (done) => {
    const response = await request(app)
      .put('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong')
      .send({
        cpf: "12345678911",
        birthdate: "2018-10-20T01:18:10.161Z",
        institution: "Catolica",
        grade: 8,
        cep: "12345678",
        number: 4,
        special: false,
        status: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Estudante não encontrado!");
    done();
  });

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9f');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });
  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Estudante não encontrado!");
    done();
  });

});
