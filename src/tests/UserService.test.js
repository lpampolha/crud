const User = require("../models/User")
// const userController = require("../controllers/userController")
const UserService = require("../services/UserService")

describe("Testando User Service", () => {

    let email = "teste@jest.com"
    let password = "1234"

    // beforeAll(async()=>{
    //     await User.sync({force:true})
    // })

    it("Criação de novo usuário", async()=>{
        // const user = await new User(email, password)
        const user = await new User(email, password)
        expect(user).not.toBeInstanceOf(Error)
        expect(user).toHaveProperty('id')
        // expect(user.email).toBe(email)
    })

    // it("Não criar usuário com e-mail já existente", async() => {
    //     const user = await new User(email, password)
    //     expect(user).toBeInstanceOf(Error)
    // })

    it("Procurar usuário pelo e-mail", async() => {
        const user = await UserService.findByEmail(email)
        expect(user.email).toBe(email)
    })

    it("Verificar senha de usuário", async() => {
        const user = await UserService.findByEmail(email)
        const match = UserService.matchPassword(password, user.password)
        expect (match).toBeTruthy()
    })

    it("Verificar senha de usuário irá dar falso", async() => {
        const user = await UserService.findByEmail(email)
        const match = UserService.matchPassword("invalid", user.password)
        expect (match).toBeFalsy()
    })

    it("Retornando a lista de usuários", async() => {
        const users = await UserService.allUsers()
        expect(users.length).toBeGreaterThanOrEqual(1)
        for (let i in users){
            expect(users[i]).toBeInstanceOf(User)
        }
    })

})