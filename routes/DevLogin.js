const {Router} = require('express')
const passport = require ('passport')
const DevController = require('../controllers/DevController')
LoginController = require('../controllers/LoginController')


const router = Router()

router.post('/login/dev', LoginController.login) 

module.exports = router