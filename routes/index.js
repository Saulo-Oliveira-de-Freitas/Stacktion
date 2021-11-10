
const express = require('express')
const devBusca = require ('./devBusca')
const devCadastro = require ('./cadastroDev.js')
const devPerfil = require ('./profileDev.js')
const clientePerfil = require ('./profileCliente')
const clienteCadastro = require ('./cadastroCliente')
const devLogin = require ('./devLogin')


module.exports = app =>{
    app.use(express.json())
    app.use(devBusca)
    app.use(devCadastro)
    app.use(devPerfil)
    app.use(devLogin)
    app.use(clienteCadastro)
    app.use(clientePerfil)
    
    
}