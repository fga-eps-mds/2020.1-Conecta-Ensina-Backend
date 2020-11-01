const Subject = require('../models/Subject');

module.exports = {
  async index(request, response) {
    try {
      const subject = await Subject.findAll({});
      return response.status(200).json({
        data: {
          subject
        }
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },

  async create(request, response) {
    const {
      id, grade, name, agentRole
    } = request.body;

    try {
      if (agentRole === 1) {
        const subject = await Subject.create({
          id,
          grade,
          name
        });

        if (!subject) {
          return response.status(200).json({
            message: 'Erro ao criar matéria!'
          });
        }
        return response.status(200).json({
          data: {
            subject
          },
          message: 'Matéria criada com sucesso!'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },

  async read(request, response) {
    const { id } = request.params;

    try {
      const subject = await Subject.findByPk(id);
      if (!subject) {
        return response.status(200).json({
          message: 'Matéria não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          subject
        },
        message: 'Matéria encontrada com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const { grade, name, agentRole } = request.body;

    try {
      if (agentRole === 1) {
        const subject = await Subject.update({
          grade,
          name
        }, {
          where: {
            id
          }
        });
        if (subject[0] === 0) {
          return response.status(200).json({
            message: 'Matéria não encontrada!'
          });
        }
        return response.status(200).json({
          data: subject[0],
          message: 'Atualizado com sucesso'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
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
      if (agentRole === 1) {
        const subject = await Subject.destroy({
          where: {
            id
          },
        });
        if (subject === 0) {
          return response.status(200).json({
            message: 'Matéria não encontrada!'
          });
        }
        return response.status(200).json({
          data: subject,
          message: 'Apagado com sucesso'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  }
};
