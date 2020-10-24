const Subject = require('../models/Subject');

module.exports = {
  async create(request, response) {
    const { id, grade, name } = request.body;

    try {
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
    const { grade, name } = request.body;

    try {
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
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
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
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  }
};
