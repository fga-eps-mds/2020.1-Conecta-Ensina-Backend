const Teacher = require('../models/Teacher');

module.exports = {
    async create (request, response) {
        const {
            photo,
            video,
            graduationArea,
            degree,
            description,
            bank,
            agency,
            account
        } = request.body;

        try {
            const teacher = await Teacher.create({
                photo: photo,
                video: video,
                graduationArea: graduationArea,
                degree: degree,
                description: description,
                bank: bank,
                agency: agency,
                account: account,
                status: 0,
            });

            if (!teacher) {
                return response.status(200).json(
                    {
                        message: 'Erro ao criar professor!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            teacher: teacher,
                        },
                        message: 'Professor criado com sucesso!',
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
            const teacher = await Teacher.findByPk( id );
            if (!teacher) {
                return response.status(200).json(
                    {
                        message: 'Professor não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            teacher: teacher,
                        },
                        message: 'Professor encontrado com sucesso',
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
            photo,
            video,
            graduation_area,
            degree,
            description,
            bank,
            agency,
            account,
            status
        } = request.body;

        try{
            const teacher = await Teacher.update({
                photo: photo,
                video: video,
                graduation_area: graduation_area,
                degree: degree,
                description: description,
                bank: bank,
                agency: agency,
                account: account,
                status: status,
            }, {
                where: {
                    id: id
                }
            });

            if (teacher == [0]) {
                return response.status(200).json(
                    {
                        message: 'Professor não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: teacher,
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
            const teacher = await Teacher.destroy({
                where: {
                    id: id
                },
            });

            if (teacher == 0) {
                return response.status(200).json(
                    {
                        message: 'Professor não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: teacher,
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
