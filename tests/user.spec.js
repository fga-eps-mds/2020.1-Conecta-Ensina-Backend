const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Login', () => {
  it('Teste login correto', async (done) => {
    const response = await request(app)
      .get('/api/users/login')
      .send({
        email: 'paulaoadmin@gmail.com',
        password: 'paulaoadmin123'
      });

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(1);
    done();
  });

  it('Teste login incorreto', async (done) => {
    const response = await request(app)
      .get('/api/users/login')
      .send({
        email: 'paulaoadmin@gmail.com',
        password: 'paulaoadmin456'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário ou senha incorretos');
    done();
  });

});
