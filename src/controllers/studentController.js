require('dotenv/config');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Student = require('../models/Student');

module.exports = {
  async updateStatus(request, response) {
    const { id } = request.params;
    const { status, agentRole } = request.body;

    try {
      if (agentRole === 1) {
        const student = await Student.update({
          status
        }, {
          where: {
            id
          }
        });
        if (student[0] === 0) {
          return response.status(400).json(
            {
              message: 'Professor não encontrado!',
            }
          );
        }
        return response.status(200).json(
          {
            data: student[0],
            message: 'Atualizado com sucesso',
          }
        );
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json(
        {
          message: error,
        }
      );
    }
  },

  async status(request, response) {
    const { status } = request.params;
    try {
      const student = await Student.findAll({
        where: { status }
      });

      if (student.length === 0) {
        return response.status(200).json(
          {
            message: 'Nenhum professor pendente',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            student,
          },
          message: 'Professor encontrado',
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
  async create(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const id = uuidv4();
    const role = 3;
    const status = 1;

    const {
      firstName,
      lastName,
      email,
      password,
      cellphone,
      cpf,
      birthdate,
      institution,
      grade,
      cep,
      number,
      details,
      description,
      special
    } = request.body;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    try {
      const user = await User.create({
        id,
        firstName,
        lastName,
        email,
        password: hash,
        cellphone,
        role
      });

      const student = await Student.create({
        id: user.id,
        cpf,
        birthdate,
        institution,
        grade,
        cep,
        number,
        details,
        description,
        special,
        status
      });

      if (!student) {
        return response.status(200).json({
          message: 'Erro ao criar estudante!'
        });
      }
      return response.status(200).json({
        data: {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            cellphone: user.cellphone,
            role: user.role
          },
          student
        },
        message: 'Estudante criado com sucesso!'
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
      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(200).json({
          message: 'Estudante não encontrado!'
        });
      }
      return response.status(200).json({
        data: {
          student
        },
        message: 'Estudante encontrado com sucesso'
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
    const {
      agentRole,
      cpf,
      birthdate,
      institution,
      grade,
      cep,
      number,
      details,
      description,
      special,
      status
    } = request.body;

    try {
      if (agentRole === 1 || agentRole === 3) {
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
          status
        }, {
          where: {
            id
          }
        });

        if (student[0] === 0) {
          return response.status(400).json({
            message: 'Estudante não encontrado!'
          });
        }
        return response.status(200).json({
          data: student[0],
          message: 'Atualizado com sucesso'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      return response.status(404).json({
        message: error
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    const { agentRole } = request.body;
    try {
      if (agentRole === 1 || agentRole === 3) {
        const student = await Student.destroy({
          where: {
            id
          },
        });

        if (student === 0) {
          return response.status(200).json({
            message: 'Estudante não encontrado!'
          });
        }
        return response.status(200).json({
          data: student,
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
