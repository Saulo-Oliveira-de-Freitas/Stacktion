
const express = require('express')
const devBusca = require ('./DevBusca')
const cadastro = require ('./cadastroDev.js')
const perfil = require ('./profileDev.js')

module.exports = app =>{
    app.use(express.json())
    app.use(devBusca)
    app.use(cadastro)
    app.use(perfil)
   
}