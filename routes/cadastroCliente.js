const {Router} = require('express')

const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.post('/cadastro/cliente',ClienteController.createClientes)

module.exports = router