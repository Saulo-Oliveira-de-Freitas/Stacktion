const {Router} = require('express')
const passport = require ('passport')
const LocalStrategy = require('passport-local').Strategy;
const DevController = require('../controllers/DevController')
LoginController = require('../controllers/LoginController')

passport.use(LocalStrategy)

const router = Router()

router.post('/dev/login', DevController.login) 

module.exports = router