// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('crud', 'root', '', {
//     dialect: 'mysql',
//     host: 'localhost',
//     define: {
//         timestamp: true,
//         undescored: true
//     }
// })

// module.exports = {
//     Sequelize: Sequelize,
//     sequelize: sequelize
// }

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'crud',
    define: {
        timestamps: true,
        undescored: false
    }
}