const database = require('../models')

class ProjetoController{
    static async selectAllProjetos (req, res){
        try {
        const allProjetos = await database.projetos.findAll()
        return res.status(200).json(allProjetos) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneProjetos (req, res){
        const {id} = req.params
        try {
            const oneProjetos = await database.projetos.findOne( {where: { id : id }})
            return res.status(200).json(oneProjetos)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createProjetos(req, res){
        const newProjeto = req.body
        try {
            const newProjetoCreated = await database.clientes.create(newProjeto)
            return res.status(200).json(newProjetoCreated)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateProjetos (req, res){
        const {id} = req.params
        const newUpdate = req.body
        try {
            await database.projetos.update(newUpdate, {where: { id : id }} )
            const updatedProjeto = await database.projetos.findOne( {where: { id : id }})
            return res.status(200).json(updatedProjeto)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteProjetos (req, res){
        const {id} = req.params
        try {
            await database.projetos.destroy({where: { id : id }})
            return res.status(200).json({alert: `Projeto ${id} deletado`})            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ProjetoController;