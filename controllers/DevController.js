const database = require('../models')
const bcrypt = require('bcrypt')

class DevController{
    static async selectAllDevs (req, res){
        try {
        const allDevs = await database.devs.findAll()
        return res.status(200).json(allDevs) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneDevs (req, res){
        const {id} = req.params
        try {
            const oneUsers = await database.devs.findOne( {where: { id : id }})
            return res.status(200).json(oneUsers)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createDevs (req, res){
        const newUsers = req.body
        try {
            const senhaHash = await DevController.hasher(newUsers.senha)
            const newUsersOk = await database.devs.create({...newUsers,senha:senhaHash})
            return res.status(200).json(newUsersOk)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async hasher(senha){
        const custo = 12;
        return bcrypt.hash(senha, custo);
    }

    static async updateDevs (req, res){
        const {id} = req.params
        const newUpdate = req.body
        try {
            await database.devs.update(newUpdate, {where: { id : id }} )
            const updatedUsers = await database.devs.findOne( {where: { id : id }})
            return res.status(200).json(updatedUsers)            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteDevs (req, res){
        const {id} = req.params
        try {
            await database.devs.destroy({where: { id : id }})
            return res.status(200).json({alert: `user ${id} was deleted`})            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async login(req,res){
        res.status(204).send({message: 'logado com sucesso'})
    }
}

module.exports = DevController;