const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const database = require('../models')



class LoginControl {

    constructor(){
        passport.use('local',new LocalStrategy (
            {
            usernameField: 'email',
            passwordField: 'senha',
            session: false
            },
        
            (email,senha,done) => {
                try 
                {
                    database.devs.findOne( {where: { email : email }})
                        .then(devs => {
                            this.checkEmail(email)
                            this.checkSenha(senha, devs.senha)
                                .then(()=> done(null, email))
                                .catch((error)=> done(error, email))
                        }).catch((error)=> done(error))

                }
                catch (error) {
                    done(error);
                }
        
            }
        ));
        
        passport.serializeUser(function(email, done) {
            done(null, email.email);
          });
          
          passport.deserializeUser(function(email, done) {
            database.devs.findOne( {where: { email : email }}).then( email => {
                done (null, email);
            }).catch(err => done(err));
          });
    }

    checkEmail(email){
        if(!email){
        throw new Error('Não há usuário com este email');
        }
    }

    async checkSenha(senha, senhaHash){
        const senhaOk = await bcrypt.compare(senha, senhaHash)
        if(!senhaOk){
            throw new Error('Senha Incorreta');
        }
    }




}


module.exports = LoginControl