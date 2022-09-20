const User = require('../../bkp/models/User')

module.exports = {
    createUser: async(req,res) => {
        const {name, email} = req.body
        const user = await User.create({name,email})
        res.json({user})
    }
}