const { v4: uuidv4 } = require('uuid');

const User = require('../models/User');

module.exports = {
    async create (request, response) {

        const { firstName, lastName, email, password } = request.body;
        const id = uuidv4();

        try {
            const user = await User.create({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });

            if (!user) {
                return response.status(200).json(
                    {
                        message: 'Erro ao criar usuário!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            user: user,
                        },
                        message: 'Usuário criado com sucesso!',
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
            const user = await User.findByPk( id );
            if (!user) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            user: user,
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
        const {firstName, lastName, email, password} =  request.body;

        try{
            const changes = await User.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }, {
                where: {
                    id: id
                }
            });
            if (changes[0] == 0) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: changes[0],
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
            const changes = await User.destroy({
                where: {
                    id: id
                },
            });
            if (changes == 0) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: changes,
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
