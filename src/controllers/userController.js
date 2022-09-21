const User = require('../models/User')

module.exports = {
    listUsers: async(req,res) => {
        try {
            const users = await User.findAll()
            
            if(!users){
                res.status(400).send({ message: "Não existem usuários cadastrados" })
            }else{
                res.status(200).json(users)
            }
        } catch (error) {
            res.status(400).send({ "error": 'Erro!' })
        }

    },

    listUser: async(req,res) => {
        try {
            const {id} = req.params
            const user = await User.findOne({where: {id}})
            if(!user){
                res.status(401).json({ message: "Usuário não encontrado" })
            }else{
                res.status(200).json(user)
            }
        } catch (error) {
            console.log(error)
            res.status(404).send({error: "Erro!"})
        }
    },

    createUser: async(req,res) => {
        try {
            const {name, email, password, contato} = req.body
            const user = await User.findOne({where: {email}})

            if(user){
                res.status(200).json({message: "Já existe um usuário com esse e-mail"})
            }else{
                const user = await User.create({name, email, password, contato})
                res.status(200).json({user})
            }

        } catch (error) {
            console.error(error.message)
            res.status(500).send({ "error": 'Erro!' })
        }
    },

    updateUser: async(req,res) => {
        try {
        const {id} = req.params
        const {name, email, password, contato} = req.body

        const user = await User.findOne({where: {id}})

        if(!user){
            res.status(401).send({ message: "Nenhum usuário encontrado" })
        }else{
            const user = await User.update({name, email, password, contato}, {where: {id}})
            res.status(200).json({user})
        } 
        
        }catch (error) {
            console.error(error.message)
            res.status(400).send({ "error": 'Erro!' })
        }
    },

    deleteUser: async(req,res) => {
        const {id} = req.params
        const user = await User.findOne({where: {id}})
            if(!user){
                res.status(401).json({ message: "Usuário não encontrado" })
            }else{
                await User.destroy({where: {id}})
                res.status(200).json({ok: true})
            }
        } 
    }