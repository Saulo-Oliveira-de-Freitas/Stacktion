import React, {useState, } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
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
                    <Link to="/requestreset/" className= 'PasswordReset' > Esqueceu a senha? </Link>
                <footer>
                <button  type="submit">Entrar</button>
                <Link to="/cadastro" className= 'RegisterLink' >  Registre-se </Link>
                </footer>
                
                </fieldset>
            </form>
    </main>
</div>
        
    )

}
export default LoginPage