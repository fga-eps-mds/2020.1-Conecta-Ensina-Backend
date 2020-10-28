require('dotenv/config');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

module.exports = {

  async create(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const role = 2;
    const status = 0;

    const id = uuidv4();
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
      special,
      photo,
      video,
      graduationArea,
      degree,
      bank,
      agency,
      account
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

      const teacher = await Teacher.create({
        id: student.id,
        photo,
        video,
        graduationArea,
        degree,
        bank,
        agency,
        account
      });

      if (!teacher) {
        return response.status(200).json({
          message: 'Erro ao criar professor!'
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
          student,
          teacher
        },
        message: 'Professor criado com sucesso!'
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
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return response.status(200).json({
          message: 'Professor não encontrado!'
        });
      }
      return response.status(200).json({
        data: {
          teacher
        },
        message: 'Professor encontrado com sucesso'
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
      photo,
      video,
      graduationArea,
      degree,
      bank,
      agency,
      account
    } = request.body;

    try {
      const teacher = await Teacher.update({
        photo,
        video,
        graduationArea,
        degree,
        bank,
        agency,
        account
      }, {
        where: {
          id
        }
      });

      if (teacher[0] === 0) {
        return response.status(200).json({
          message: 'Professor não encontrado!'
        });
      }
      return response.status(200).json({
        data: teacher[0],
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
      const teacher = await Teacher.destroy({
        where: {
          id
        },
      });

      if (teacher === 0) {
        return response.status(200).json({
          message: 'Professor não encontrado!'
        });
      }
      return response.status(200).json({
        data: teacher,
        message: 'Apagado com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  }

};
