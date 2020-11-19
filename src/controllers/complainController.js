const Complain = require('../models/Complain');
const { v4: uuidv4 } = require('uuid');

module.exports = {

  async create(request, response) {
    const id = uuidv4();
    const { 
      accused, reported_by,details
    } = request.body;

    try {
      
      const complain = await Complain.create({
        id,
        accused,
        reported_by,
        details,
      });

      if (!complain) {
        return response.status(400).json({
          message: 'Erro ao criar denúncia!'
        });
      }
      return response.status(200).json({
        data: {
          complain
        },
        message: 'Denúncia criada com sucesso!'
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
      const complain = await Complain.findByPk(id);
      if (!complain) {
        return response.status(404).json({
          message: 'Denúncia não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          complain
        },
        message: 'Denúncia encontrada com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },
  async update(request,response){
    const { id } = request.params;
    const {
      accused,
      details,
      reported_by
    } = request.body;

    try{
      const complain = await Complain.update({
        accused,
        details,
        reported_by
      }, {
        where: {
          id
        }
      });

      if (Complain[0] === 0) {
        return response.status(404).json({
          message: 'Denúncia não encontrada!'
        });
      }
      return response.status(200).json({
        data: complain[0],
        message: 'Atualizado com sucesso'
      });
    } catch (error){
      return response.status(400).json({
        message: error
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const complain = await Complain.destroy({
        where: {
          id
        },
      });

      if (complain === 0) {
        return response.status(404).json({
          message: 'Denúncia não encontrada!'
        });
      }
      return response.status(200).json({
        data: complain,
        message: 'Apagada com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  }
  
  
};