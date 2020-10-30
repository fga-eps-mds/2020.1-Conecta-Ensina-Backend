const { v4: uuidv4 } = require('uuid');
const Classroom = require('../models/Classroom');

module.exports = {
  async create(request, response) {
    const id = uuidv4();
    const {
      agentRole,
      teacher,
      student,
      grade,
      subject,
      dtclass,
      duration,
      cep,
      number,
      details
    } = request.body;
    const status = 0;

    try {
      if(agentRole === 3){
        const classroom = await Classroom.create({
          id,
          teacher,
          student,
          grade,
          subject,
          dtclass,
          duration,
          cep,
          number,
          details,
          status
        });

        if (!classroom) {
          return response.status(400).json({
            message: 'Erro ao criar aula!'
          });
        }

        return response.status(200).json({
          data: {
            classroom
          },
          message: 'Aula criada com sucesso!'
        });
      }
      else{
        return response.status(401).json({
          message: 'O usuário não possui permissão para a ação'
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },

  async read(request, response) {
    const { id } = request.params;
    const { agentRole } = request.body;
    try {
      if(agentRole === 2){
        const classroom = await Classroom.findByPk(id);

        if (!classroom) {
          return response.status(200).json({
            message: 'Aula não encontrada!'
          });
        }
        return response.status(200).json({
          data: {
            classroom
          },
          message: 'Aula encontrada com sucesso'
        });
      }
      else{
        return response.status(401).json({
          message: 'O usuário não possui permissão para a ação'
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      agentRole,
      teacher,
      student,
      grade,
      subject,
      dtclass,
      duration,
      cep,
      number,
      details,
      status
    } = request.body;

    try {
      if(agentRole === 2 || agentRole === 3){
        const classroom = await Classroom.update({
          teacher,
          student,
          grade,
          subject,
          dtclass,
          duration,
          cep,
          number,
          details,
          status
        }, {
          where: {
            id
          }
        });

        if (classroom[0] === 0) {
          return response.status(200).json({
            message: 'Aula não encontrada!'
          });
        }
        return response.status(200).json({
          data: classroom[0],
          message: 'Atualizado com sucesso'
        });
      }
      else{
        return response.status(401).json({
          message: 'O usuário não possui permissão para a ação'
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    const { agentRole } = request.body;

    try {
      if(agentRole === 2 || agentRole === 3){
        const classroom = await Classroom.destroy({
          where: {
            id
          },
        });

        if (classroom === 0) {
          return response.status(200).json({
            message: 'Aula não encontrada!'
          });
        }
        return response.status(200).json({
          data: classroom,
          message: 'Apagado com sucesso'
        });
      }
      else{
        return response.status(401).json({
          message: 'O usuário não possui permissão para a ação'
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  }
};
