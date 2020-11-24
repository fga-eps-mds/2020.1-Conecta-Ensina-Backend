const request = require('supertest');
const app = require('../src/app');


describe(('Rate tests'), ()=>{

  it(('should create new rate'), async (done)=>{
    const response = await request(app)
    .post('/api/rate/')
    .send({
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
      class_id: '95a694c6-0338-4510-ac4c-f1aa1d693a57',
      comments: 'lalalalala',
      rate: 4,
      rate_creator: 3
    });

    expect(response.status).toBe(200);
    expect(response.body.data.avaliation).toHaveProperty("id");
    done();
  });

  it(('should not create new rate'), async (done)=>{
    const response = await request(app)
    .post('/api/rate/')
    .send({
      student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      teacher: '12c06dd6-187a-4a50-927f-5d08b367ee89',
      class_id: '95a694c6-0338-4510-ac4c-f1aa1d693a57inexistente',
      comments: 'lalalalala',
      rate: 4,
      rate_creator: 3
    });
    expect(response.status).toBe(400);
    done();
  });

});
