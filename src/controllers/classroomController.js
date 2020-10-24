const { v4: uuidv4 } = require('uuid');
const Classroom = require('../models/Classroom');

module.exports = {
    async create (request, response) {
    
        const id = uuidv4();
        const { 
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
            const classroom = await Classroom.create({
                id: id,
                teacher: teacher,
                student: student,
                grade: grade,
                subject: subject,
                dtclass: dtclass,
                duration: duration,
                cep: cep,
                number: number,
                details: details,
                status: status
            });

            if (!classroom) {
                return response.status(200).json({
                    message: 'Erro ao criar aula!'
                });
            } else {
                return response.status(200).json({
                    data: {
                        classroom: classroom
                    },
                    message: 'Aula criada com sucesso!'
                });
            };
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                message: error
            });
        };
    },

    async read (request, response) {

        const { id } = request.params;

        try {
            const classroom = await Classroom.findByPk( id );
            
            if (!classroom) {
                return response.status(200).json({
                    message: 'Aula não encontrada!'
                });
            } else {
                return response.status(200).json({
                    data: {
                        classroom: classroom
                    },
                    message: 'Aula encontrada com sucesso'
                });
            };
        } catch (error) {
            console.log(error);
            return response.status(200).json({
                message: error
            });
        };
    },

    async update (request, response){

        const { id } = request.params;
        const { 
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

        try{
            const classroom = await Classroom.update({
                teacher: teacher,
                student: student,
                grade: grade,
                subject: subject,
                dtclass: dtclass,
                duration: duration,
                cep: cep,
                number: number,
                details: details,
                status: status
            }, {
                where: {
                    id: id
                }
            });

            if (classroom[0] == 0) {
                return response.status(200).json({
                    message: 'Aula não encontrada!'
                });
            } else {
                return response.status(200).json({
                    data: classroom[0],
                    message: 'Atualizado com sucesso'
                });
            };
        } catch (error){
            console.log(error);
            return response.status(200).json({
                message: error
            });            
        };
    },

    async delete (request, response){
       
        const { id } = request.params;

        try{
            const classroom = await Classroom.destroy({
                where: {
                    id: id
                },
            });

            if (classroom == 0) {
                return response.status(200).json({
                    message: 'Aula não encontrada!'
                });
            } else {
                return response.status(200).json({
                    data: classroom,
                    message: 'Apagado com sucesso'
                });
            };
        } catch (error){
            console.log(error);
            return response.status(200).json({
                message: error
            });            
        };
    }
};
