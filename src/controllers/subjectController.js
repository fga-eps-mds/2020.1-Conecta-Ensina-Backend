const Subject = require('../models/Subject');

module.exports = {
    async create (request, response) {

        const { id, grade, name } = request.body;

        try {

            const subject = await Subject.create({
                id: id,
                grade: grade,
                name: name
            });

            if (!subject) {
                return response.status(200).json(
                    {
                        message: 'Erro ao criar matéria!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            subject: subject,
                        },
                        message: 'Matéria criado com sucesso!',
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
            const subject = await Subject.findByPk( id );
            if (!subject) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            subject: subject,
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
        const { grade, name } =  request.body;

        try{
            const subject = await Subject.update({
                grade: grade,
                name: name,
            }, {
                where: {
                    id: id
                }
            });
            if (subject[0] == 0) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: subject[0],
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
            const subject = await Subject.destroy({
                where: {
                    id: id
                },
            });
            if (subject == 0) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: subject,
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
