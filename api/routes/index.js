const express = require('express');
const busca = require('./busca.js');
const cadastro = require('./cadastro.js');
const perfil = require('./perfil.js');
const login = require('./login.js');
const catalogoskill = require('./catalogoSkills.js');

module.exports = app => {

    app.use(busca)
    app.use(cadastro)
    app.use(perfil)
    app.use(login)
    app.use(catalogoskill)

    app.get('/', (req, res) => res.send('Tela Inicial'))

}

