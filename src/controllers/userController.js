const User = require('../models/User');

module.exports = {
    async create (request, response) {

        const { firstName, lastName, email, password } = request.body

        try {
            const user = await User.create({
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
                            user: user
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

    async show (request, response) {

        const { id } = request.params

        try {
            const user = await User.findByPk( id );
            if (!user) {
                return response.status(200).json(
                    {
                        message: 'Usuário ou senha incorretos',
                    }
                );
            } else {
                return response.status(200).json(
                    {
                        data: {
                            user: user
                        },
                        message: 'Logado com sucesso',
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

    }
};
