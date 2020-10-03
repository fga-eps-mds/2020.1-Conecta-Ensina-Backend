const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async create (request, response) {

        const { firstName, lastName, email, password } = request.body;

        try {
            const passwordCrypt = bcrypt.hashSync(password, 10);

            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: passwordCrypt,
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

        const passwordCrypt = bcrypt.hashSync(password, 10);

        try{
            const user = await User.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: passwordCrypt
            }, {
                where: {
                    id: id
                }
            });
            if (user == [0]) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: user,
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
            const user = await User.destroy({
                where: {
                    id: id
                },
            });
            if (!user) {
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: user,
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
