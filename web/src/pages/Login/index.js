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
                        label="email"
                    
                       
                    />    

                    <Input 
                        name="senha" 
                        label="Senha"
                         
                        
                    />
                    
                <footer>
                <button  type="submit">Salvar cadastro</button>
                
                <a href="/Dev" className= 'RegisterLink' > Não possui uma conta? Registre-se </a>
                </footer>

                </fieldset>
            </form>
    </main>
</div>
        
    )

}
export default LoginPage