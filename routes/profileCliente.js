const {Router} = require('express')

const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.put ('/cliente/:id', ClienteController.updateClientes)

router.delete ('cliente/:id', ClienteController.deleteClientes)

module.exports = router