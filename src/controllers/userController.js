require('dotenv/config');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = {
    async create (request, response) {

        const saltRounds = Number(process.env.SALT_ROUNDS);

        const id = uuidv4();
        const role = 1;

        const { firstName, lastName, email, password, cellphone } = request.body;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        try {

            const user = await User.create({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
                cellphone: cellphone,
                role: role
            });

            if (!user) {
                return response.status(200).json({
                    message: 'Erro ao criar usuário!'
                });
            } else {
                return response.status(200).json({
                    data: {
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            cellphone: user.cellphone,
                            role: user.role
                        }
                    },
                    message: 'Usuário criado com sucesso!'
                });
            };
        } catch (error) {
            console.log(error);
            return response.status(200).json({
                message: error
            });
        };
    },

    async read (request, response) {

        const { id } = request.params;

        try {
            const user = await User.findByPk( id );
            if (!user) {
                return response.status(200).json({
                    message: 'Usuário não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: {
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            cellphone: user.cellphone,
                            role: user.role
                        }
                    },
                    message: 'Usuário encontrado com sucesso'
                });
            };
        } catch (error) {
            console.log(error);
            return response.status(200).json({
                message: error
            });
        };
    },

    async update (request, response){

        const { id } = request.params;
        const { firstName, lastName, email, password, cellphone, role } =  request.body;

        const saltRounds = Number(process.env.SALT_ROUNDS);

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        try{
            const user = await User.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
                cellphone: cellphone,
                role: role
            }, {
                where: {
                    id: id
                }
            });
            if (user[0] == 0) {
                return response.status(200).json({
                    message: 'Usuário não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: user[0],
                    message: 'Atualizado com sucesso'
                });
            };
        } catch (error){
            console.log(error);
            return response.status(200).json({
                message: error
            });            
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
            if (user == 0) {
                return response.status(200).json({
                    message: 'Usuário não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: user,
                    message: 'Apagado com sucesso'
                });
            };
        } catch (error){
            console.log(error);
            return response.status(200).json({
                message: error
            });            
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

            if(user && bcrypt.compareSync(password, user.password)){
                return response.status(200).json({
                    message: 'Login efetuado com sucesso!'
                });
            } else {
                return response.status(400).json({
                    message: 'Usuário e/ou senha incorreto!'
                });
            };
        } catch (error){
            return response.status(400).json({
                message: error
            });
        };
    
    }
};
