import React, {useState, } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './styles.css';

function ResetCode() {
    
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Esqueci minha senha" 
            description="Insira o código de recuperação."
        />

        <main>
            <form >
                <fieldset>
                   
                    <Input 
                        name="resetSenha" 
                        label="Código"
                    
                       
                    /> 
                        <Link to="/passwordreset">
                        <button className="FormButton" type="submit"> Confirmar Código </button> 
                        </Link>
                </fieldset>
                  
               
            </form>
    </main>
</div>
        
    )

}
export default ResetCode