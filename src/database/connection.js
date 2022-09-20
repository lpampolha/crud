const Sequelize = require('sequelize')
const configDB = require('../config/database')['development']

const connection = new Sequelize(configDB)

module.exports = connection