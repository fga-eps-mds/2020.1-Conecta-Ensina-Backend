const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('User tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .post('/api/users/create')
      .send({
        firstName: "Usuário",
        lastName: "Teste",
        cellphone: "61987654321",
        email: "user@teste.com",
        password: "senhadopaulotestes",
        role: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty("id");
    done();
  });

  it('Teste read correto', async (done) => {
    const response = await request(app)
      .get('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253');

    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty("id");
    done();
  });

  it('Teste read incorreto', async (done) => {
    const response = await request(app)
      .get('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

  it('Teste edit correto', async (done) => {
    const response = await request(app)
      .put('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253')
      .send({
        firstName: "Administrador",
        lastName: "Atualizado",
        cellphone: "61912345678",
        email: "atualizado@atualizado.com",
        password: "senhaatualizada",
        role: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste edit incorreto', async (done) => {
    const response = await request(app)
      .put('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253wrong')
      .send({
        firstName: "Administrador",
        lastName: "Atualizado",
        cellphone: "61912345678",
        email: "atualizado@atualizado.com",
        password: "senhaatualizada",
        role: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/users/79ce51ad-1e5a-43b9-b71f-56cfe18d2253wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

});
