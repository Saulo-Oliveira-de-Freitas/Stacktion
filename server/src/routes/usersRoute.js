const {Router} = require('express')

const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users',UserController.getUsers) 

router.get('/users/:id',UserController.getUser) 

router.post('/users/',UserController.createUser)

module.exports = router