const express = require('express')
const {Router} = require('express')
const router = Router()
const app = express()
const userController = require('./user')

router.get('/', (req,res) => {
    res.send('CRUD')
})
app.use('/user', userController)


module.exports = router