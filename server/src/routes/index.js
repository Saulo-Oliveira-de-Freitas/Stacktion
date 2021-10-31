const app = require("..");
const express = require('express')
const users = require ('../database/models')

module.exports = app =>{
    app.use(express.json())
    app.get('/',(req,res)=>{
        console.log('oi')
    })
}