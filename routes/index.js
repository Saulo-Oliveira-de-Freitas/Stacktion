
const express = require('express')
const devBusca = require ('./DevBusca')
const devCadastro = require ('./cadastroDev.js')
const devPerfil = require ('./profileDev.js')
const clientePerfil = require ('./profileCliente')
const clienteCadastro = require ('./cadastroCliente')



module.exports = app =>{
    app.use(express.json())
    app.use(devBusca)
    app.use(devCadastro)
    app.use(devPerfil)
    app.use(clienteCadastro)
    app.use(clientePerfil)
    
}