const { body } = require('express-validator')
const request = require('supertest')
const app = require('../app')
// const User = require("../models/User")

describe("Testando as rotas da API", () => {

    let email = "teste@jest.com"
    let password = "1234"

    // beforeAll(async()=>{
    //     await User.sync({force:true})
    // })

    it("Testando a rota raiz", (done) => {
        request(app)
        .get('/')
        .then(response => {
            expect({response: body.CRUD}).toBeTruthy()
            return done()
        })
    })

    it("Testando a rota de criação de usuário", (done) => {
        request(app)
        .post('/create-user')
        .send(`email=${email}&password=${password}`)
        .then(response => {
            expect(response.body.error).toBeUndefined()
            // expect(response.body).toHaveProperty('id')
            return done()
        })
    })

    // it("Não permitir a criação de usuário com e-mail existente", (done) => {
    //     request(app)
    //     .post('/create-user')
    //     .send(`email=${email}&password=${password}`)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         return done()
    //     })
    // })

    // it("Não permitir a criação de usuário sem senha", (done) => {
    //     request(app)
    //     .post('/create-user')
    //     .send(`email=${email}`)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         return done()
    //     })
    // })

    // it("Não permitir a criação de usuário sem e-mail", (done) => {
    //     request(app)
    //     .post('/create-user')
    //     .send(`password=${password}`)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         return done()
    //     })
    // })

    // it("Não permitir a criação de usuário sem dados", (done) => {
    //     request(app)
    //     .post('/create-user')
    //     .send(``)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         return done()
    //     })
    // })

    // it("Verificar se consegue logar", (done) => {
    //     request(app)
    //     .post('/login')
    //     .send(`email=${email}&password=${password}`)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         expect(response.body.status).not.toBeTruthy()
    //         return done()
    //     })
    // })

    // it("Verificar se não consegue logar", (done) => {
    //     request(app)
    //     .post('/login')
    //     .send(`email=${email}&password=invalid`)
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         expect(response.body.status).not.toBeFalsy()
    //         return done()
    //     })
    // })

    // it("Verificar se consegue logar", (done) => {
    //     request(app)
    //     .get('/users')
    //     .then(response => {
    //         expect(response.body.error).not.toBeUndefined()
    //         expect(response.body.list.length).not.toBeGreaterThanOrEqual(1)
    //         expect(response.body.list).toConatin(email)
    //         return done()
    //     })
    // })

})