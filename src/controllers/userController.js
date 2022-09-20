const User = require('../models/User')

module.exports = {
    getAll: async(req,res) => {
        try {
            const users = await User.findAll()
            console.log(users)
            res.json(users)
            
        } catch (error) {
            console.error(error.message)
            res.status(500).send({ "error": 'Erro!' })
        }

    },
    createUser: async(req,res) => {
        try {
            const {name, email, password, contato} = req.body
            const user = await User.create({name, email, password, contato})
            res.json({user})
        } catch (error) {
            console.error(error.message)
            res.status(500).send({ "error": 'Erro!' })
        }
    },

}