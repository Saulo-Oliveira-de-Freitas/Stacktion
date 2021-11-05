const {Router} = require('express')

const DevController = require('../controllers/DevController')

const router = Router()

router.get('/dev', DevController.selectAllDevs) 

router.get('/dev/:id', DevController.selectOneDevs) 

module.exports = router