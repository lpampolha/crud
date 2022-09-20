const {DataTypes} = require('sequelize')

module.exports = (DataTypes , sequelize) => {
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
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updateAt: {
        type: Sequelize.DATE,
        field: 'update_at'
    }
})


// const {Model, DataTypes} = require('sequelize')

// class User extends Model {
//     static init(sequelize){
//         super.init({
//             name: DataTypes.STRING,
//             email: DataTypes.STRING,
//             createAt: {
//                 type: DataTypes.DATE,
//                 field: 'create_at'
//             },
//             updateAt: {
//                 type: DataTypes.DATE,
//                 field: 'update_at'
//             }
//         },{
//             sequelize
//         })
//     }
// }

return User}