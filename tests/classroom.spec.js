const request = require('supertest');
const app = require('../src/app');

describe(('Classroom tests'), ()=>{
  it(('should create classroom'), async (done)=>{
    const response = await request(app)
    .post('/api/classroom/create')
    .send({
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      grade: 13,
      subject: 1,
      dtclass: new Date(),
      duration: 1,
      cep: '72865431',
      number: 12,
      details: 'Apartamento 1212',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.classroom).toHaveProperty("id");
    done();
  });

  it(('should failed in create classroom'), async (done)=>{
    const response = await request(app)
    .post('/api/classroom/create')
    .send({
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89wrong',
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong',
      grade: 13,
      subject: 1,
      dtclass: new Date(),
      duration: 1,
      cep: '72865431',
      number: 12,
      details: 'Apartamento 1212',
    });

    expect(response.status).toBe(400);
    done();
  });

  it(('should read classroom'), async (done)=>{
    const response = await request(app)
    .get('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312')
    

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("classroom");
    done();
  });

  it(('should failed in read classroom'), async (done)=>{
    const response = await request(app)
    .get('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312wrong')
    

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Aula não encontrada!');
    done();
  });

  it(('should update classroom'), async (done)=>{
    const response = await request(app)
    .put('/api/classroom/a30d2c7c-042d-40bd-96ab-0712ee33b5c1')
    .send({
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      grade: 13,
      subject: 1,
      dtclass: new Date(),
      duration: 2,
      cep: '72865431',
      number: 12,
      details: 'Apartamento 1212',
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it(('should failed in update classroom'), async (done)=>{
    const response = await request(app)
    .put('/api/classroom/a30d2c7c-042d-40bd-96ab-0712ee33b5c1wrong')
    .send({
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      grade: 13,
      subject: 1,
      dtclass: new Date(),
      duration: 2,
      cep: '72865431',
      number: 12,
      details: 'Apartamento 1212',
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Aula não encontrada!");
    done();
  });

  it(('should delete classroom'), async (done)=>{
    const response = await request(app)
    .delete('/api/classroom/a30d2c7c-042d-40bd-96ab-0712ee33b5c1');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Apagado com sucesso");
    done();
  });

  it(('should failed in delete classroom'), async (done)=>{
    const response = await request(app)
    .delete('/api/classroom/a30d2c7c-042d-40bd-96ab-0712ee33b5c1wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Aula não encontrada!");
    done();
  })
  
})