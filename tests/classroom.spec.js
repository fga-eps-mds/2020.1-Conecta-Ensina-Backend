const request = require('supertest');
const app = require('../src/app');

describe(('Classroom tests'), ()=>{
  it(('should create classroom'), async (done)=>{
    const response = await request(app)
    .post('/api/classroom/create')
    .send({
      teacher: 'dfd29066-cd25-485c-8722-b429291d0ea3',
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
      teacher: 'dfd29066-cd25-485c-8722-b429291d0ea3',
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
    .put('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312')
    .send({
      teacher: 'df9786f9-6b6b-4042-bac0-6b5225a7b76e',
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
    .put('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312wrong')
    .send({
      teacher: 'df9786f9-6b6b-4042-bac0-6b5225a7b76e',
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
    .delete('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Apagado com sucesso");
    done();
  });

  it(('should failed in delete classroom'), async (done)=>{
    const response = await request(app)
    .delete('/api/classroom/f00c1ee9-078b-4b61-8e3f-a23d68da4312wrong');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Aula não encontrada!");
    done();
  })
  
})