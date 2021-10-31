const app = require("..");
const express = require('express')


module.exports = app =>{
    app.use(express.json())
    app.get('/',(req,res)=>{
        console.log('oi')
    })
}