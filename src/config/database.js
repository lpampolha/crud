const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

module.exports = {
    "development": {
      "host": process.env.DB_HOST,
      "username": process.env.DB_USER,
      "password": process.env.DB_PWD,
      "database": process.env.DB_NAME,
      "dialect": "mysql",
      "define": {
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
      // "logging": true #deprecado
    },
    "test": {
      "host": process.env.DB_HOST,
      "username": process.env.DB_USER,
      "password": process.env.DB_PWD,
      "database": process.env.DB_TEST_NAME,
      "dialect": "mysql",
      "define": {
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
      // "logging": true #deprecado
    },
    "production": {
      "host": process.env.DB_HOST,
      "username": process.env.DB_USER,
      "password": process.env.DB_PWD,
      "database": process.env.DB_NAME,
      "dialect": "mysql",
      "define": {
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
      // "logging": false #deprecado
    }
  }
