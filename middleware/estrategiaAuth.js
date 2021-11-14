const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Dev = require('../models/devs')

const estrategiaAuth = () =>{

passport.use('local',new LocalStrategy({
    usernameField:'email',
    passwordField:'senha',
    session: false
    },async(email, senha, done) =>{
        try {
            const dev = await Dev.findOne( {where: { email : email }})    
            verificaDev(dev);
             await verificaSenha(senha, dev.senhaHash);

            done(null,dev);
        } catch (error) {
            done(error)
        }
    }

))}


function verificaDev(dev){
    if(!dev){
        throw new Error(' Usuário Inválido')
    }
}

async function verificaSenha(){
    const senhaValida = await bcrypt.compare(senha,senhaHash);
    if(!senhaValida){
        throw new Error(' Email ou senha Inválidos')
    }
}

module.exports = estrategiaAuth