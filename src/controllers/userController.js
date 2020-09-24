const User = require('../models/User');

module.exports = {
    async login (request, response) {

        const { email, password } = request.body

        try {
            const user = await User.findOne({
                where: {
                    email: email,
                    password: password,
                }
            });
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
                            id: user.id
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
