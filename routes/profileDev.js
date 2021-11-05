const {Router} = require('express')

const DevController = require('../controllers/DevController')

const router = Router()

router.put ('/dev/:id', DevController.updateDevs)

router.delete ('dev/:id', DevController.deleteDevs)

module.exports = router