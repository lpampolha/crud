const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
    createUser: async (name, email, password, contato) => {
    const hashUser = await User.findOne({ where: {email}})
    if(!hashUser){
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        const user = await User.create({
            name, 
            email, 
            password: hash, 
            contato
        })
        return user
    }else{
        return new Error('E-mail já existe')
    }
},

    findByEmail: async (email) => {
    return await User.findOne({where: {email}})
},

    matchPassword: (passwordText, encrypted) => {
    return bcrypt.compareSync(passwordText, encrypted )
},

    allUsers: async () => {
    return await User.findAll()
}

}