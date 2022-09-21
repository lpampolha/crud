const express = require('express')
const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')


router.get('/', (req,res) => {
    res.send('CRUD')
})
router.get('/users', userController.listUsers)
router.get('/user/:id', userController.listUser)
router.patch('/user/:id', userController.updateUser)
router.post('/user-create', userController.createUser)
router.delete('/user-delete/:id', userController.deleteUser)

module.exports = router