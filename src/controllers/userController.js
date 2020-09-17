
module.exports = {
    async login (request, response) {
        return response.status(200).json({ message: 'Hello World!' });
    }
};
