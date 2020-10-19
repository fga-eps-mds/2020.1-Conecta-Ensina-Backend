const Teacher = require('../models/Teacher');

module.exports = {
    async create (request, response) {
        const { 
            institution,
            cep,
            number,
            details,
            photo,
            description,
            video,
            graduation,
            graduationArea,
            degree,
            bank,
            agency,
            account,
            status,
        } = request.body;
        try {
            const teacher = await Teacher.create({
                institution: institution, 
                cep: cep, 
                number: number, 
                details: details, 
                photo: photo,
                description: description, 
                video: video, 
                graduation: graduation,
                graduationArea: graduationArea,
                degree: degree,
                bank: bank,
                agency: agency,
                account: account,
                status: status,
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
            institution,
            cep,
            number,
            details,
            photo,
            description,
            video,
            graduation,
            graduationArea,
            degree,
            bank,
            agency,
            account,
            status,
        } = request.body;

        try{
            const teacher = await Teacher.update({
                id: id,
                institution: institution, 
                cep: cep, 
                number: number, 
                details: details, 
                photo: photo,
                description: description, 
                video: video, 
                graduation: graduation,
                graduationArea: graduationArea,
                degree: degree,
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
            if (!teacher) {
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
