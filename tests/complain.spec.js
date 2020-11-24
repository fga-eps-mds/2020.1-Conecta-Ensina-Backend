const request = require('supertest');
const app = require('../src/app');

describe(('Complain tests'), () => {
  it(('Should create complain'), async (done) => {
    const response = await request(app)
      .post('/api/complain/create')
      .send({
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        details: 'Não compareceu a aula',
        reported_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f'
      });

    expect(response.status).toBe(200);
    expect(response.body.data.complain).toHaveProperty('id');
    expect(response.body.student.status).toBe(2);
    done();
  });
  it(('Should have error in create complain'), async (done) => {
    const response = await request(app)
      .post('/api/complain/create')
      .send({
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        details: 'Não compareceu a aula',
      });

    expect(response.status).toBe(500);
    done();
  });
  it(('Should read complain'), async (done) => {
    const response = await request(app)
      .get('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('complain');
    done();
  });
  it(('Should failed in read complain'), async (done) => {
    const response = await request(app)
      .get('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463wrong');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Denúncia não encontrada!');
    done();
  });
  it(('Should update complain'), async (done) => {
    const response = await request(app)
      .put('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463')
      .send({
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        details: 'Didática muito ruim',
        reported_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f'
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });
  it(('Should failed update complain'), async (done) => {
    const response = await request(app)
      .put('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463wrong')
      .send({
        accused: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        details: 'Didática muito ruim',
        reported_by: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f'
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Denúncia não encontrada!');
    done();
  });

  it(('Should delete complain'), async (done) => {
    const response = await request(app)
      .delete('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Apagada com sucesso');
    done();
  });
  it(('Should failed in delete complain'), async (done) => {
    const response = await request(app)
      .delete('/api/complain/91c1596e-3bf2-486f-b0be-894661f32463wrong');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Denúncia não encontrada!');
    done();
  });
});
