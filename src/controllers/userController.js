const User = require('../models/User')

module.exports = {
    createUser: async(req,res) => {
        const {name, email} = req.body
        const user = await User.create({name,email})
        res.json({user})
    }
}