const Student = require('../models/Student');

module.exports = {
  async create(request, response) {
    const { id } = request.params;
    const {
      cpf,
      birthdate,
      institution,
      grade,
      cep,
      number,
      details,
      description,
      special,
    } = request.body;

    try {
      const student = await Student.create({
        id,
        cpf,
        birthdate,
        institution,
        grade,
        cep,
        number,
        details,
        description,
        special,
      });

      if (!student) {
        return response.status(200).json(
          {
            message: 'Erro ao criar estudante!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            student,
          },
          message: 'Estudante criado com sucesso!',
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
      const student = await Student.findByPk(id);
      if (!student) {
        return response.status(200).json(
          {
            message: 'Estudante não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            student,
          },
          message: 'Estudante encontrado com sucesso',
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
      cpf,
      birthdate,
      institution,
      grade,
      cep,
      number,
      details,
      description,
      special,
    } = request.body;

    try {
      const student = await Student.update({
        cpf,
        birthdate,
        institution,
        grade,
        cep,
        number,
        details,
        description,
        special,
      }, {
        where: {
          id
        }
      });

      if (student[0] === 0) {
        return response.status(200).json(
          {
            message: 'Estudante não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: student[0],
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
      const student = await Student.destroy({
        where: {
          id
        },
      });

      if (student === 0) {
        return response.status(200).json(
          {
            message: 'Estudante não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: student,
          message: 'Apagado com sucesso',
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
  }
};
