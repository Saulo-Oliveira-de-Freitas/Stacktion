import React, {useState, } from 'react';
import axios from 'axios';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';




import './styles.css';

function PasswordReset() {
    
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Recuperação de senha" 
            
        />

        <main>
            <form >
                <fieldset>
                    <legend>Cadastre sua nova senha</legend>

                    <Input 
                        name="senha" 
                        label="Nova senha"
                    
                       
                    />    

                    <Input 
                        name="senhaConfirma" 
                        label="Confirme a nova senha"
                    />
                    <button  type="submit">Concluir</button> 
               
                
                </fieldset>
            </form>
    </main>
</div>
        
    )

}
export default PasswordReset