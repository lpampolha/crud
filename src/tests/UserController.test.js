const User = require('../models/User')

it("Verificar se users não retorna undefined", async() => {
    const response = await User.findAll()
    expect(response).not.toBeUndefined()
})