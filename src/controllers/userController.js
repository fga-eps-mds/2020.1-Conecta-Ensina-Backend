// const { User } = require('../models/user');

module.exports = {
    async login (request, response) {
        // const user = await User.findAll({
        //     where: {
        //         email: 'pv.paulovictor.vp@gmail.com'
        //     }
        //   });

        const { email, password } = request.body
       
        return response.status(200).json(
            {
                data: {
                    email: email,
                    password: password
                },
                message: 'Logado com sucesso',
            }
        );
    }
};
