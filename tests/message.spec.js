const request = require('supertest');
const app = require('../src/app');

describe(('Message test'), () => {

  it(('should get all messages with same classroomID'), async(done)=>{
    const response = await request(app)
    .get('api/message/chat/f00c1ee9-078b-4b61-8e3f-a23d68da4312');
      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty('mensagem');
      done();
  });

  it(('should read message by id'), async(done)=>{
    const response = await request(app)
    .get('api/message/0fec04a5-23da-4d8e-8c31-12865d0b47a0');
      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty('mensagem');
      done();
  });

  it(('should not read message by id'), async(done)=>{
    const response = await request(app)
    .get('api/message/0fec04a5-23da-4d8e-8c31-12865d0b47a0wrong');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Mensagem não encontrada!');
      done();
  });

  it(('should create a message'), async(done)=>{
    const response = await request(app)
    .post('api/message/create')
    .send({
      text: 'Teste',
      classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
      student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89', 
      create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89'
    });
      expect(response.status).toBe(200);
    //  expect(response.body.data.message).toHaveProperty('id');
      done();
  });
  it(('should not create a message'), async(done)=>{
    const response = await request(app)
    .post('api/message/create')
    .send({
      text: 'Teste',
      classroom_id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312wrong',
      student_id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9fwrong',
      teacher_id: '12c06dd6-187a-4a50-927f-5d08b367ee89wrong', 
      create_by: '12c06dd6-187a-4a50-927f-5d08b367ee89wrong'
    });
      expect(response.status).toBe(400);
    //  expect(response.body.data.message).toHaveProperty('id');
      done();
  });

});