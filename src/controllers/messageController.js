require('dotenv/config');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const Mensagem = require('../models/Message')

module.exports = {

  async create(request, response) {
    const id = uuidv4();
    const {
      text,
      classroom_id,
      student_id,
      teacher_id, 
      create_by 
    } = request.body;

    try {
      const mensagem = await Mensagem.create({
        id,
        text,
        classroom_id,
        student_id,
        teacher_id, 
        create_by
      });

      if (!mensagem) {
        return response.status(400).json({
          message: 'Erro ao criar mensagem!'
        });
      }
      return response.status(200).json({
        data: {
          mensagem
        },
        message: 'mensagem criada com sucesso!'
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
      const mensagem = await Mensagem.findByPk(id);

      if (!mensagem) {
        return response.status(404).json({
          message: 'Mensagem não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          mensagem
        },
        message: 'Mensagem encontrado com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async chat(request, response) {
    const { classroom_id } = request.params;
    try {   
      const mensagem = await Mensagem.findAll({
        where: { classroom_id }
      });
      return response.status(200).json({
        data: {
          mensagem
        }
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },

};
