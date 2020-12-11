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

});