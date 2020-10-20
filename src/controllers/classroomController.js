const Classroom = require('../models/Classroom');

module.exports = {
    async create (request, response) {

        const { id, grade, name } = request.body;

        try {

            const classroom = await Classroom.create({
                id: id,
                grade: grade,
                name: name
            });

            if (!classroom) {
                return response.status(200).json(
                    {
                        message: 'Erro ao criar aula!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            classroom: classroom,
                        },
                        message: 'Aula criada com sucesso!',
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
            const classroom = await Classroom.findByPk( id );
            if (!classroom) {
                return response.status(200).json(
                    {
                        message: 'Aula não encontrada!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            classroom: classroom,
                        },
                        message: 'Aula encontrada com sucesso',
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
            const classroom = await Classroom.update({
                grade: grade,
                name: name,
            }, {
                where: {
                    id: id
                }
            });
            if (classroom[0] == 0) {
                return response.status(200).json(
                    {
                        message: 'Aula não encontrada!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: classroom[0],
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
            const classroom = await Classroom.destroy({
                where: {
                    id: id
                },
            });
            if (classroom == 0) {
                return response.status(200).json(
                    {
                        message: 'Aula não encontrada!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: classroom,
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
