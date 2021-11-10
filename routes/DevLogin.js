const {Router} = require('express')
const passport = require ('passport')
const LocalStrategy = require('passport-local').Strategy;
const DevController = require('../controllers/DevController')
LoginController = require('../controllers/LoginController')
const router = Router()

router.post('/dev/login',passport.authenticate('local',{session:false}) ,DevController.login) 

module.exports = router