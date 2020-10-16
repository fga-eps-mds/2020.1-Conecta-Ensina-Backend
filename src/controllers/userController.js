const { v4: uuidv4 } = require('uuid');

const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async create (request, response) {

        const { firstName, lastName, email, password } = request.body;
        const id = uuidv4();
        const saltRounds = 12;

        try {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            const user = await User.create({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
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

        const saltRounds = 12;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        try{
            const changes = await User.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
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
    },

    async login (request, response){
        const { email, password } = request.body;

        try{
            const user = await User.findOne({ 
                where: { 
                    email: email
                } 
            }); 

            if(!user){
                return response.status(200).json(
                    {
                        message: 'Usuário não encontrado!',
                    }
                );
            } else {
                if(bcrypt.compareSync(password, user.password)){
                    console.log('Login efetuado com sucesso!');
                }
                else{
                    console.log('Senha errada.')
                }
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
