require('dotenv/config');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Student = require('../models/Student');

module.exports = {
    async create (request, response) {

        const saltRounds = Number(process.env.SALT_ROUNDS);

        const id = uuidv4();
        const role = 3;
        const status = 1;

        const {
            firstName,
            lastName,
            email,
            password,
            cellphone,
            cpf,
            birthdate,
            institution,
            grade,
            cep,
            number,
            details,
            description,
            special
        } = request.body;

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

            const student = await Student.create({
                id: user.id,
                cpf: cpf,
                birthdate: birthdate,
                institution: institution, 
                grade: grade,
                cep: cep,
                number: number,
                details: details,
                description: description,
                special: special,
                status: status
            });

            if (!student) {
                return response.status(200).json({
                    message: 'Erro ao criar estudante!'
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
                        },
                        student: student
                    },
                    message: 'Estudante criado com sucesso!'
                });
            };
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                message: error
            });
        };
    },

    async read (request, response) {

        const { id } = request.params;

        try {
            const student = await Student.findByPk( id );

            if (!student) {
                return response.status(200).json({
                    message: 'Estudante não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: {
                        student: student
                    },
                    message: 'Estudante encontrado com sucesso'
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
        const {
            cpf,
            birthdate,
            institution,
            grade,
            cep,
            number,
            details,
            description,
            special,
            status
        } = request.body;

        try{
            const student = await Student.update({
                cpf: cpf,
                birthdate: birthdate,
                institution: institution,
                grade: grade,
                cep: cep,
                number: number,
                details: details,
                description: description,
                special: special,
                status: status
            }, {
                where: {
                    id: id
                }
            });

            if (student[0] == 0) {
                return response.status(400).json({
                    message: 'Estudante não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: student[0],
                    message: 'Atualizado com sucesso'
                });
            };
        } catch (error){
            return response.status(404).json({
                message: error
            });            
        };
    },
  
    async delete (request, response){

        const { id } = request.params;

        try{
            const student = await Student.destroy({
                where: {
                    id: id
                },
            });

            if (student == 0) {
                return response.status(200).json({
                    message: 'Estudante não encontrado!'
                });
            } else {
                return response.status(200).json({
                    data: student,
                    message: 'Apagado com sucesso'
                });
            };
        } catch (error){
            console.log(error);
            return response.status(200).json({
                message: error
            });            
        };
    }
};
