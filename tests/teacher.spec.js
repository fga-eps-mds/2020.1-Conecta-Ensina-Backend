const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Teacher tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .post('/api/teacher/create')
      .send({
        firstName: 'Teacher',
        lastName: 'Qualquer',
        cellphone: '61987654321',
        email: 'teacher@qualquer.com',
        password: 'teacherqualquer123',
        cpf: '12345678900',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '72123123',
        number: 4,
        special: false,
        photo: 'photo3.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        bank: 'Santander',
        agency: '1778-7',
        account: '50043-5'
      });

    expect(response.status).toBe(200);
    expect(response.body.data.teacher).toHaveProperty('id');
    done();
  });

  it('Teste create incorreto', async (done) => {
    const response = await request(app)
      .post('/api/teacher/create')
      .send({
        firstName: 'Teacher2',
        lastName: 'Qualquer',
        cellphone: '61987654321',
        email: 'teacher2@qualquer.com',
        password: 'teacher2qualquer123',
        cpf: '12345678910',
        birthdate: '2020-10-20T01:18:10.161Z',
        institution: 'Catolica',
        grade: 7,
        cep: '72123123',
        number: 4,
        special: false,
        photo: 'photo3.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        bank: 'Santander',
        agency: '1778-7',
        account: '50043-5'
      });

    expect(response.status).toBe(400);
    done();
  });

  it('Teste read correto', async (done) => {
    const response = await request(app)
      .get('/api/teacher/12c06dd6-187a-4a50-927f-5d08b367ee89');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('teacher');
    done();
  });

  it('Teste read incorreto', async (done) => {
    const response = await request(app)
      .get('/api/teacher/12c06dd6-187a-4a50-927f-5d08b367ee89wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Professor não encontrado!');
    done();
  });

  it('should update teacher', async (done) => {
    const response = await request(app)
      .put('/api/teacher/c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed')
      .send({
        agentRole: 2,
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Português',
        degree: 'diploma.pdf',
        bank: 'BRB',
        agency: '1778-7',
        account: '50043-5'
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('should denied update teacher', async (done) => {
    const response = await request(app)
      .put('/api/teacher/c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed')
      .send({
        agentRole: 3,
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Português',
        degree: 'diploma.pdf',
        bank: 'BRB',
        agency: '1778-7',
        account: '50043-5'
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it('should failed in update teacher', async (done) => {
    const response = await request(app)
      .put('/api/teacher/12c06dd6-187a-4a50-927f-5d08b367ee89wrong')
      .send({
        agentRole: 2,
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Português',
        degree: 'diploma.pdf',
        bank: 'BRB',
        agency: '1778-7',
        account: '50043-5'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Professor não encontrado!');
    done();
  });

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/teacher/c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/teacher/c3cdc164-d3f3-4ba1-ae98-a2c28eab45edwrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Professor não encontrado!');
    done();
  });
});
