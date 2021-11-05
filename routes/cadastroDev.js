const {Router} = require('express')

const DevController = require('../controllers/DevController')

const router = Router()

router.post('/cadastro/dev', DevController.createDevs)

module.exports = router