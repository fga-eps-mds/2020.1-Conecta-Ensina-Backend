const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('User tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .get('/api/users/1');

    expect(response.status).toBe(200);
    expect(response.body.data.user.id).toBe(1);
    done();
  });

  it('Teste create incorreto', async (done) => {
    const response = await request(app)
      .post('/api/users/create')
      .send({
        firstName: "Paulão",
        lastName: "dos testes",
        email: "paulaotestes@paulo.com",
        password: "senhadopauotestes",
      });

    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty("id");
    done();
  });

  it('Teste show correto', async (done) => {
    const response = await request(app)
      .get('/api/users/1');

    expect(response.status).toBe(200);
    expect(response.body.data.user.id).toBe(1);
    done();
  });

  it('Teste show incorreto', async (done) => {
    const response = await request(app)
      .get('/api/users/1000');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário ou senha incorretos');
    done();
  });

});
