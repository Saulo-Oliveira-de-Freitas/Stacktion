
const express = require('express')
const users = require ('./usersRoute')

module.exports = app =>{
    app.use(express.json())
    app.use(users)
   
}