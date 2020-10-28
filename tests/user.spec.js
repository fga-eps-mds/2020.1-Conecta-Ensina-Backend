/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('User tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .post('/api/user/create')
      .send({
        firstName: 'Usuário',
        lastName: 'Qualquer',
        cellphone: '61987654321',
        email: 'usuario@qualquer.com',
        password: 'usuarioqualquer123'
      });

    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty('id');
    done();
  });

  it('Teste read correto', async (done) => {
    const response = await request(app)
      .get('/api/user/79ce51ad-1e5a-43b9-b71f-56cfe18d2253');

    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty('id');
    done();
  });

  it('Teste read incorreto', async (done) => {
    const response = await request(app)
      .get('/api/user/79ce51ad-1e5a-43b9-b71f-56cfe18d2253wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

  it('Teste edit correto', async (done) => {
    const response = await request(app)
      .put('/api/user/98ff6e63-cfbe-4bbd-9789-2dcf023b8251')
      .send({
        firstName: 'Usuario',
        lastName: 'Atualizado',
        cellphone: '61912345678',
        email: 'usuario@atualizado.com',
        password: 'usuarioatualizado123'
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste edit incorreto', async (done) => {
    const response = await request(app)
      .put('/api/user/98ff6e63-cfbe-4bbd-9789-2dcf023b8251wrong')
      .send({
        firstName: 'Usuario',
        lastName: 'Atualizado',
        cellphone: '61912345678',
        email: 'usuario@atualizado.com',
        password: 'usuarioatualizado123'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/user/98ff6e63-cfbe-4bbd-9789-2dcf023b8251');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/user/98ff6e63-cfbe-4bbd-9789-2dcf023b8251wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });

  it('Teste login correto', async (done) => {
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: 'teacher@fixo.com',
        password: 'teacherfixo123'
      });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login efetuado com sucesso!');
    done();
  });

  it('Teste login incorreto', async (done) => {
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: 'teacher@fixo.com',
        password: 'teacherfixo123errada',
      });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Usuário e/ou senha incorreto!');
    done();
  });
});
