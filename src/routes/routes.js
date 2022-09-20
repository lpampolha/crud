const express = require('express')
const {Router} = require('express')
const router = Router()
const app = express()
const userController = require('../controllers/userController')

router.get('/', (req,res) => {
    res.send('CRUD')
})
router.post('/user-create', userController.createUser )


module.exports = router