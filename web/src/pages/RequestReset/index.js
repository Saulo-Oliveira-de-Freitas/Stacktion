import React, {useState, } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './styles.css';

function RequestResetPage() {
    
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Esqueci minha senha" 
            description="insira seu Email, se for um email válido, você receberá código de recuperação."
        />

        <main>
            <form >
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="email" 
                        label="Email"
                    
                       
                    /> 
                        <Link to="/resetcode">
                        <button className="FormButton" type="submit"> Recuperar Senha </button> 
                        </Link>
                </fieldset>
                  
               
            </form>
    </main>
</div>
        
    )

}
export default RequestResetPage