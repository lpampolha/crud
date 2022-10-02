const express = require('express')
const {Router} = require('express')
const userController = require('../controllers/userController')
const router = Router()


router.get('/', (req,res) => {
    res.send('CRUD')
})
router.get('/users', userController.listUsers)
router.get('/user', userController.findUser)
router.patch('/user/:id', userController.updateUser)
router.post('/user-create', userController.newUser)
router.post('/login', userController.login)
router.delete('/user-delete/:id', userController.deleteUser)

module.exports = router