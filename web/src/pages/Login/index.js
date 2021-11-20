import React, {useState, } from 'react';
import axios from 'axios';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';


import api from '../../services/api';



import './styles.css';

function LoginPage() {
    
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Login" 
        />

        <main>
            <form >
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="email" 
                        label="Email"
                    />    
                    <Input 
                        name="senha" 
                        label="Senha"
                    />
                    <a href="/requestreset/dev" className= 'PasswordReset' > Esqueceu a senha? </a>
                <footer>
                <button  type="submit">Entrar</button>
                <a href="/cadastro/dev" className= 'RegisterLink' >  Registre-se </a>
                </footer>
                
                </fieldset>
            </form>
    </main>
</div>
        
    )

}
export default LoginPage