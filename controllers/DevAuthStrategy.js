const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const Dev = require('../models/devs')

function userVerify(user){
    if(!user){throw new Error('Não existe usuário com estas credenciais')}
} 
function passwordVerify(password,passwordHash){

    const validPassword = await  bcrypt.compare(password,passwordHash)
    if(!validPassword){throw new Error('Email ou senha Incorretos')}
} 

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    },async (email,password, done) => {
        try {
            const user = await Dev.findOne( {where: { email : email }}) 
            userVerify(user)
            passwordVerify(password, user.passwordHash)   

            done(null,user)
        } catch (error) {
            return done(error)
        }
        
    })
)