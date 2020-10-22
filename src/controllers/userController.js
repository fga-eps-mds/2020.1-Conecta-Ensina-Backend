const { v4: uuidv4 } = require('uuid');

const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  async create(request, response) {
    const {
      firstName, lastName, email, password, cellphone, role
    } = request.body;
    const id = uuidv4();
    const saltRounds = 12;

    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const user = await User.create({
        id,
        firstName,
        lastName,
        email,
        password: hash,
        cellphone,
        role,
      });

      if (!user) {
        return response.status(200).json(
          {
            message: 'Erro ao criar usuário!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            user,
          },
          message: 'Usuário criado com sucesso!',
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

  async read(request, response) {
    const { id } = request.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return response.status(200).json(
          {
            message: 'Usuário não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: {
            user,
          },
          message: 'Usuário encontrado com sucesso',
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
      firstName, lastName, email, password, cellphone, role
    } = request.body;

    const saltRounds = 12;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    try {
      const user = await User.update({
        firstName,
        lastName,
        email,
        password: hash,
        cellphone,
        role
      }, {
        where: {
          id
        }
      });
      if (user[0] === 0) {
        return response.status(200).json(
          {
            message: 'Usuário não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: user[0],
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
      const user = await User.destroy({
        where: {
          id
        },
      });
      if (user === 0) {
        return response.status(200).json(
          {
            message: 'Usuário não encontrado!',
          }
        );
      }
      return response.status(200).json(
        {
          data: user,
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
  },

  async login(request, response) {
    const { email, password } = request.body;

    try {
      const user = await User.findOne({
        where: {
          email
        }
      });

      if (!user) {
        return response.status(200).json(
          {
            message: 'Usuário não encontrado!',
          }
        );
      } if (bcrypt.compareSync(password, user.password)) {
        console.log('Login efetuado com sucesso!');
      } else {
        console.log('Senha errada.');
      }
    } catch (error) {
      console.log(error);
      return response.status(200).json(
        {
          message: error,
        }
      );
    }
    return true;
  }
};
