const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Login', () => {
  it('Teste login correto', async (done) => {
    const response = await request(app)
      .get('/api/users/login');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    done();
  });

});
