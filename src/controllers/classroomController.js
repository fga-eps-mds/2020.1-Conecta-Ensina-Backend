const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const Classroom = require('../models/Classroom');
const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

module.exports = {

  async index(request, response) {
    const {
      student,
      teacher,
      status,
    } = request.body;
    let classroom;

    try {
      if (!student) {
        classroom = await Classroom.findAll({
          include: [{
            model: Teacher,
            required: true,
            include: [{
              model: Student,
              required: true,
              include: [{
                model: User, required: true,
              }]
            }]
          }, {
            model: Student,
            required: true,
            include: [{
              model: User, required: true
            }]
          }],
          where: {
            teacher,
            status,
          },
        });
      } else {
        classroom = await Classroom.findAll({
          where: {
            student,
            status,
          },
        });
      }
    } catch (error) {
      return response.status(200).json({
        message: error
      });
    }
    classroom.sort((a, b) => {
      if (a.dtclass < b.dtclass) return -1;
      if (a.dtclass > b.dtclass) return 1;
      return 0;
    });
    return response.status(200).json({
      data: {
        classroom
      },
      classrooms: classroom.length,
      message: 'Aula encontrada com sucesso'
    });
  },

  async create(request, response) {
    const id = uuidv4();
    const {
      agentRole,
      teacher,
      student,
      grade,
      subject,
      dtclass,
      duration,
      cep,
      number,
      details
    } = request.body;
    const status = 0;

    try {
      if (agentRole === 3) {
        const classroom = await Classroom.create({
          id,
          teacher,
          student,
          grade,
          subject,
          dtclass,
          duration,
          cep,
          number,
          details,
          status
        });

        if (!classroom) {
          return response.status(400).json({
            message: 'Erro ao criar aula!'
          });
        }

        return response.status(200).json({
          data: {
            classroom
          },
          message: 'Aula criada com sucesso!'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      return response.status(400).json({
        message: error
      });
    }
  },

  async read(request, response) {
    const { id } = request.params;
    try {
      const classroom = await Classroom.findByPk(id, {
        include: [{
          model: Teacher,
          required: true,
          include: [{
            model: Student,
            required: true,
            include: [{
              model: User, required: true,
            }]
          }]
        }, {
          model: Student,
          required: true,
          include: [{
            model: User, required: true
          }]
        }]
      });

      if (!classroom) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          classroom
        },
        message: 'Aula encontrada com sucesso'
      });
    } catch (error) {
      return response.status(400).json({
        message: error
      });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      agentRole,
      teacher,
      student,
      grade,
      subject,
      dtclass,
      duration,
      cep,
      number,
      details,
      status
    } = request.body;

    try {
      if (agentRole === 2 || agentRole === 3) {
        const classroom = await Classroom.update({
          teacher,
          student,
          grade,
          subject,
          dtclass,
          duration,
          cep,
          number,
          details,
          status
        }, {
          where: {
            id
          }
        });

        if (classroom[0] === 0) {
          return response.status(404).json({
            message: 'Aula não encontrada!'
          });
        }
        return response.status(200).json({
          data: classroom[0],
          message: 'Atualizado com sucesso'
        });
      }

      return response.status(401).json({
        message: 'O usuário não possui permissão para a ação'
      });
    } catch (error) {
      return response.status(400).json({
        message: error
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const classroom = await Classroom.destroy({
        where: {
          id
        },
      });

      if (classroom === 0) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: classroom,
        message: 'Apagado com sucesso'
      });
    } catch (error) {
      return response.status(200).json({
        message: error
      });
    }
  },

  async statusClass(request, response) {
    const { id } = request.params;
    const { status } = request.params;
    try {
      const classroom = await Classroom.findAll({
        include: [{
          model: Teacher,
          required: true,
          include: [{
            model: Student,
            required: true,
            include: [{
              model: User, required: true,
            }]
          }]
        }, {
          model: Student,
          required: true,
          include: [{
            model: User, required: true
          }]
        }],
        where: {
          [Op.or]: [{ student: id }, { teacher: id }],
          status
        }
      });
      if (classroom.length === 0) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          classroom
        },
        message: 'Aula encontrada com sucesso'
      });
    } catch (error) {
      return response.status(400).json({
        message: error
      });
    }
  },

  async nextClass(request, response) {
    const { student } = request.params;
    try {
      const classroom = await Classroom.findOne({
        where: {
          student/* ,
        [Op.gte]: [{dtclass : sysDate}]
        */ }
      });
      if (!classroom) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          classroom
        },
        message: 'Aula encontrada com sucesso'
      });
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        message: error
      });
    }
  },

  async userClasses(request, response) {
    const { id } = request.params;
    try {
      const classroom = await Classroom.findAll({
        where: {
          [Op.or]: [{ student: id }, { teacher: id }],
        }
      });
      if (classroom.length < 1) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: {
          classroom
        },
        message: 'Aula encontrada com sucesso'
      });
    } catch (error) {
      return response.status(400).json({
        message: error
      });
    }
  },

  async statusUpdate(request, response) {
    const { id } = request.params;
    const {
      status
    } = request.body;

    try {
      const classroom = await Classroom.update({
        status
      }, {
        where: {
          id
        }
      });

      if (classroom[0] === 0) {
        return response.status(404).json({
          message: 'Aula não encontrada!'
        });
      }
      return response.status(200).json({
        data: classroom[0],
        message: 'Status atualizado com sucesso'
      });
    } catch (error) {
      return response.status(200).json({
        message: error
      });
    }
  }
};
