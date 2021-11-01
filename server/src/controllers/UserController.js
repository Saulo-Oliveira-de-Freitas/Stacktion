 
const database = require('../database/models')

class UserController{
    static async getUsers(req,res)
    {
        try{
            const allUsers = await database.users.findAll()  
            return res.status(200).json(allUsers)
        }catch(error){
            return res.status(500).json(error.message)
        }
      
    }

    static async getUser(req, res){ 
       const {id} = req.params
       try{
        const user = await database.users.findOne({ 
            where : 
            {
                id: Number(id)
            }
        })
        return res.status(200).json(user)
       }
       catch(error)
       {
           return res.status(500).json(error.message)
       }
       
    }

    static async createUser(req,res){
        const newUser = req.body
        try{
            createdUser = await database.users.create(newUser)
            return res.status(200).json(createdUser)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController