const Teacher = require('../models/Teacher');

module.exports = {

  async create(request, response) {
    const { id } = request.params;
    const {
      photo,
      video,
      graduationArea,
      degree,
      description,
      bank,
      agency,
      account
    } = request.body;

    try {
      const teacher = await Teacher.create({
        id,
        photo,
        video,
        graduationArea,
        degree,
        description,
        bank,
        agency,
        account,
        status: 0,
      });

      if (!teacher) {
        return response.status(200).json(
          {
            message: 'Erro ao criar professor!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            teacher,
          },
          message: 'Professor criado com sucesso!',
        }
      );
    } catch (error) {
      console.log(error);
      return response.status(400).json(
        {
          message: error,
        }
      );
    }
  },

  async read(request, response) {
    const { id } = request.params;

    try {
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return response.status(200).json(
          {
            message: 'Professor não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            teacher,
          },
          message: 'Professor encontrado com sucesso',
        }
      );
    } catch (error) {
      console.log(error);
      return response.status(200).json(
        {
          message: error,
        }
      );
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      photo,
      video,
      graduationArea,
      degree,
      description,
      bank,
      agency,
      account,
      status
    } = request.body;

    try {
      const teacher = await Teacher.update({
        photo,
        video,
        graduationArea,
        degree,
        description,
        bank,
        agency,
        account,
        status,
      }, {
        where: {
          id
        }
      });

      if (teacher[0] === 0) {
        return response.status(200).json(
          {
            message: 'Professor não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: teacher[0],
          message: 'Atualizado com sucesso',
        }
      );
    } catch (error) {
      console.log(error);
      return response.status(200).json(
        {
          message: error,
        }
      );
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const teacher = await Teacher.destroy({
        where: {
          id
        },
      });

      if (teacher === 0) {
        return response.status(200).json(
          {
            message: 'Professor não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: teacher,
          message: 'Apagado com sucesso',
        }
      );
    } catch (error) {
      console.log(error);
      return response.status(400).json(
        {
          message: error,
        }
      );
    }
  }
};
