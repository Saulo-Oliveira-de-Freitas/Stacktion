const {Router} = require('express')

const ProjetoController = require('../controllers/ProjetoController')

const router = Router()

router.get('/projetos/:id', ProjetoController.selectOneProjetos)

router.get('/projetos/:id', ProjetoController.selectAllProjetos)

router.put ('/projetos/:id', ProjetoController.updateProjetos)

router.delete ('projetos/:id', ProjetoController.deleteProjetos)

module.exports = router