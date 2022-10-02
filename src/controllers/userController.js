const UserService = require('../services/UserService')

module.exports = {
    listUsers: async(req,res) => {
        const users = await UserService.allUsers()
        let list = []

        for (let i in users){
            list.push(users[i].email)
        }
        res.json({list})
    },

    findUser: async(req,res) => {
        try {
            const email = req.body.email
            const user = await UserService.findByEmail(email)
            if(!user){
                res.status(401).json({ message: "Usuário não encontrado" })
            }else{
                res.status(200).json({
                    "id": user.id,
                    "name": user.name,
                    "contato": user.contato
                })
            }
        } catch (error) {
            console.log(error)
            res.status(404).send({error: "Erro!"})
        }
    },

    newUser: async(req,res) => {
        if(req.body.name, req.body.email, req.body.password, req.body.contato){
            let{name, email, password, contato} = req.body
            const user = await UserService.createUser(name, email, password, contato)

            if(user instanceof Error){
                return res.json({error: user.message})
            }else{
                res.status(201)
                return res.json({id: user.id})
            }
        }
            return res.json({error: 'E-mail e/ou senha não enviados.'})
    },

    login: async(req,res) => {
        if(req.body.email && req.body.password){
            let email = req.body.email
            let password = req.body.password

            const user = await UserService.findByEmail(email)

            if(user && UserService.matchPassword(password, user.password)) {
                res.json({status: true})
                return
            }
        }
        res.json({status: false})
    },

    updateUser: async(req,res) => {
        try {
        const {id} = req.params
        const {name, email, password, contato} = req.body

        const user = await User.findOne({where: {id}})

        if(!user){
            res.status(401).send({ message: "Nenhum usuário encontrado" })
        }else{
            const user = await UserService.update({name, email, password, contato}, {where: {id}})
            res.status(200).json({user})
        } 
        
        }catch (error) {
            console.error(error.message)
            res.status(400).send({ "error": 'Erro!' })
        }
    },

    deleteUser: async(req,res) => {
        const {id} = req.params
        const user = await UserService.findOne({where: {id}})
            if(!user){
                res.status(401).json({ message: "Usuário não encontrado" })
            }else{
                await User.destroy({where: {id}})
                res.status(200).json({ok: true})
            }
        } 
    }