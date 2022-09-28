import bcrypt from 'bcryptjs'
import {User} from '../models/User'

export const createUser = async (name, email, password, contato) => {
    const hashUser = await User.findOne({ where: {email}})
    if(!hashUser){
        const hash = bcrypt.hashSync(password,10)
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
}

export const findByEmail = async (email) => {
    return await User.findOne({where: {email}})
}

export const matchPassword = (passwordText, encrypted) => {
    return bcrypt.compareSync(passwordText, encrypted )
}

export const allUsers = async () => {
    return await User.findAll()
}