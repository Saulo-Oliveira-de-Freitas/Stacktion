const {Router} = require('express')

const DevController = require('../controllers/DevController')

const router = Router()

router.post('/users/', DevController.createDevs)

module.exports = router