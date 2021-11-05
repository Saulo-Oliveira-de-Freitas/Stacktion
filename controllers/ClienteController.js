const database = require('../models')

class ClienteController{
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
            return res.status(200).json(oneClientes)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createProject(req, res){
        const newCliente = req.body
        try {
            const newClienteCreated = await database.clientes.create(newCliente)
            return res.status(200).json(newClienteCreated)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateClientes (req, res){
        const {id} = req.params
        const newUpdate = req.body
        try {
            await database.clientes.update(newUpdate, {where: { id : id }} )
            const updatedCliente = await database.clientes.findOne( {where: { id : id }})
            return res.status(200).json(updatedCliente)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteClientes (req, res){
        const {id} = req.params
        try {
            await database.clientes.destroy({where: { id : id }})
            return res.status(200).json({alert: `Cliente ${id} deletado`})            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController;