const Sequelize = require('sequelize')
const sequelize = new Sequelize('user', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

    const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    contato: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updateAt: {
        type: Sequelize.DATE,
        field: 'update_at'
    }
})

return User