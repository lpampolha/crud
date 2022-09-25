const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

module.exports = {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PWD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": "mysql",
      "define": true,
      // "logging": true #deprecado
    },
    "test": {
      "username": "root",
      "password": "",
      "database": "crud",
      "host": "localhost",
      "dialect": "mysql",
      "define": true,
      // "logging": true #deprecado
    },
    "production": {
      "username": "root",
      "password": "",
      "database": "crud",
      "host": "localhost",
      "dialect": "mysql",
      "define": true,
      // "logging": false #deprecado
    }
  }
