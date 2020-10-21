const request = require('supertest');
const app = require('../src/app');

// Login feature
describe('Teacher tests', () => {
  it('Teste create correto', async (done) => {
    const response = await request(app)
      .post('/api/teachers/c3cdc164-d3f3-4ba1-ae98-a2c28eab45ed')
      .send({
        photo: 'photo2.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'Santander',
        agency: '1778-7',
        account: '50043-5',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.teacher).toHaveProperty("id");
    done();
  });
  it('Teste create incorreto', async (done) => {
    const response = await request(app)
      .post('/api/teachers/c3cdc164-d3f3-4ba1-ae98-a2c28eab45edwrong')
      .send({
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Matemática',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'Santander',
        agency: '1778-7',
        account: '50043-5',
      });

    expect(response.status).toBe(400);
    done();
  });

  it('Teste read correto', async (done) => {
    const response = await request(app)
      .get('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("teacher");
    done();
  });

  it('Teste read incorreto', async (done) => {
    const response = await request(app)
      .get('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Professor não encontrado!');
    done();
  });

  it('Teste edit correto', async (done) => {
    const response = await request(app)
      .put('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89')
      .send({
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Português',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'BRB',
        agency: '1778-7',
        account: '50043-5',
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it('Teste edit incorreto', async (done) => {
    const response = await request(app)
      .put('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89wrong')
      .send({
        photo: 'photo.jpg',
        video: 'https://www.youtube.com/watch?v=xntQdZmCm-I',
        graduation_area: 'Português',
        degree: 'diploma.pdf',
        description: 'Descrição de professor',
        bank: 'BRB',
        agency: '1778-7',
        account: '50043-5',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Professor não encontrado!");
    done();
  });

  it('Teste delete correto', async (done) => {
    const response = await request(app)
      .delete('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });
  it('Teste delete incorreto', async (done) => {
    const response = await request(app)
      .delete('/api/teachers/12c06dd6-187a-4a50-927f-5d08b367ee89wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Professor não encontrado!");
    done();
  });

});
