const database = require('../models')

class UserController{
    static async getUsers(req,res)
    {
        try{
            const  allUsers = await database.users.findAll()
            return res.status(200).json(allUsers)
        }catch(error){
            return res.status(500).json(error.message)
        }
      
    }
}

module.exports = UserController