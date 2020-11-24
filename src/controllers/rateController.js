const { v4: uuidv4 } = require('uuid');
const Rate = require('../models/Rate');

module.exports = {

  async create(request, response) {
    const {
      // eslint-disable-next-line camelcase
      teacher, student, rate_creator, class_id, comments, rate
    } = request.body;
    const id = uuidv4();
    try {
      const avaliation = await Rate.create({
        id,
        rate,
        rate_creator,
        teacher,
        student,
        class_id,
        comments
      });
      if (!avaliation) {
        return response.status(400).json({
          message: 'Erro ao criar avaliação!'
        });
      }
      return response.status(200).json({
        data: {
          avaliation
        },
        message: 'Avaliação criada com sucesso!'
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error
      });
    }
  },

};
