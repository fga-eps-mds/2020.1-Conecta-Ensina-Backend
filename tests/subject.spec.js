const request = require('supertest');
const app = require('../src/app');


describe(('Subject tests'), ()=>{
  it(('should create subject'), async (done)=>{
    const response = await request(app)
    .post('/api/subject/create')
    .send({
      id: 3,
      grade: 3,
      name: 'Matematica',
      agentRole: 1
    });

    expect(response.status).toBe(200);
    expect(response.body.data.subject).toHaveProperty("id");
    done();
  });

  it(('should denied create subject'), async (done)=>{
    const response = await request(app)
    .post('/api/subject/create')
    .send({
      id: 3,
      grade: 3,
      name: 'Matematica',
      agentRole: 2
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("O usuário não possui permissão para a ação");
    done();
  });

  it(('should failed create subject'), async (done)=>{
    const response = await request(app)
    .post('/api/subject/create')
    .send({
      id: 1,
      grade: 3,
      name: 'Matematica',
      agentRole: 1
    });

    expect(response.status).toBe(400);
    done();
  });

  it(('should read subject'), async (done)=>{
    const response = await request(app)
    .get('/api/subject/1')
    

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("subject");
    done();
  });

  it(('should failed read subject'), async (done)=>{
    const response = await request(app)
    .get('/api/subject/341234')
    

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Matéria não encontrada!');
    done();
  });

  it(('should update subject'), async (done)=>{
    const response = await request(app)
    .put('/api/subject/2')
    .send({
      grade: 2,
      name: 'Matematica',
      agentRole: 1
    });
    
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });

  it(('should denied update subject'), async (done)=>{
    const response = await request(app)
    .put('/api/subject/2')
    .send({
      grade: 2,
      name: 'Matematica',
      agentRole: 2
    });
    
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it(('should failed in update subject'), async (done)=>{
    const response = await request(app)
    .put('/api/subject/341234')
    .send({
      grade: 2,
      name: 'Matematica',
      agentRole: 1
    });
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Matéria não encontrada!');
    done();
  });

  it(('should delete subject'), async (done)=>{
    const response = await request(app)
    .delete('/api/subject/3')
    .send({agentRole:1})
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Apagado com sucesso');
    done();
  });

  it(('should denied delete subject'), async (done)=>{
    const response = await request(app)
    .delete('/api/subject/3')
    .send({agentRole:2})
    
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('O usuário não possui permissão para a ação');
    done();
  });

  it(('should failed in delete subject'), async (done)=>{
    const response = await request(app)
    .delete('/api/subject/142452')
    .send({agentRole:1})
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Matéria não encontrada!');
    done();
  });

  it(('should return all subjects'), async (done)=>{
    const response = await request(app)
    .get('/api/subject')
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("subject");
    done();
  });
  
});
