
const User = require('../models/User')

module.exports = {
    createUser: async(req,res) => {
        const {name, email, password, contato} = req.body
        const user = await User.create({name, email, password, contato})
        res.json({user})
    }
}