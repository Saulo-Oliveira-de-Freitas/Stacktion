const database = require('../models')
const bcrypt = require('bcrypt')
class ClienteController{
    static async selectAllClientes (req, res){
        try {
        const allClientes = await database.cliente.findAll()
        return res.status(200).json(allClientes) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneClientes (req, res){
        const {id} = req.params
        try {
            const oneCliente = await database.cliente.findOne( {where: { id : id }})
            return res.status(200).json(oneCliente)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createClientes(req, res){
        const newCliente = req.body
        try {
            const senhaHash = await DevController.hasher(newCliente.senha)
            const newClienteCreated = await database.cliente.create({...newCliente,senha:senhaHash})
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
            await database.cliente.update(newUpdate, {where: { id : id }} )
            const updatedCliente = await database.cliente.findOne( {where: { id : id }})
            return res.status(200).json(updatedCliente)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteClientes (req, res){
        const {id} = req.params
        try {
            await database.cliente.destroy({where: { id : id }})
            return res.status(200).json({alert: `Cliente ${id} deletado`})            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController;