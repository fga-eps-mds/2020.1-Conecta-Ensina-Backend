const Student = require('../models/Student');

module.exports = {
    async create (request, response) {
        const { 
            grade, 
            institution, 
            cpf, 
            cep, 
            number, 
            details, 
            description, 
            adulthood, 
            special,
        } = request.body;
        try {
            const student = await Student.create({
                grade: grade, 
                institution: institution, 
                cpf: cpf, 
                cep: cep, 
                number: number, 
                details: details, 
                description: description, 
                adulthood: adulthood, 
                special: special,
            });
            if (!student) {
                return response.status(200).json(
                    {
                        message: 'Erro ao criar estudante!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            student: student,
                        },
                        message: 'Estudante criado com sucesso!',
                    }
                );
            };
        } catch (error) {
            console.log(error);
            return response.status(200).json(
                {
                    message: error,
                }
            );
        };
    },

    async read (request, response) {

        const { id } = request.params;

        try {
            const student = await Student.findByPk( id );
            if (!student) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            student: student,
                        },
                        message: 'Usuário encontrado com sucesso',
                    }
                );
            };
        } catch (error) {
            console.log(error);
            return response.status(200).json(
                {
                    message: error,
                }
            );
        };
    },

    async update (request, response){

        const { id } = request.params;
        const {
            grade, 
            institution, 
            cpf, 
            cep, 
            number, 
            details, 
            description, 
            adulthood, 
            special,
        } = request.body;

        try{
            const student = await Student.update({
                id: id,
                grade: grade, 
                institution: institution, 
                cpf: cpf, 
                cep: cep, 
                number: number, 
                details: details, 
                description: description, 
                adulthood: adulthood, 
                special: special,
            }, {
                where: {
                    id: id
                }
            });
            if (student == [0]) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: student,
                        message: 'Atualizado com sucesso',
                    }
                );
            };
        } catch (error){
            console.log(error);
            return response.status(200).json(
                {
                    message: error,
                }
            );            
        };
    },
  
    async delete (request, response){

        const { id } = request.params;

        try{
            const student = await Student.destroy({
                where: {
                    id: id
                },
            });
            if (!student) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: student,
                        message: 'Apagado com sucesso',
                    }
                );
            };
        } catch (error){
            console.log(error);
            return response.status(200).json(
                {
                    message: error,
                }
            );            
        };
    }
};
