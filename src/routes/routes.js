const express = require('express')
const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.get('/', (req,res) => {
    res.send('CRUD')
})
router.post('/user-create', userController.createUser )
router.get('/users', userController.getAll )


module.exports = router