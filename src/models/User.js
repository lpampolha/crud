const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    contato: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
    // createdAt: {
    //     type: Sequelize.DATE,
    //     // autoIncrement: true,
    //     field: 'created_at'
    // },
    // updateAt: {
    //     type: Sequelize.DATE,
    //     // autoIncrement: true,
    //     field: 'update_at'
    // },
})

module.exports = User