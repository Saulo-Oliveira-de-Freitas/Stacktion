import React, {useState, } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';


import api from '../../services/api';



import './styles.css';

function ProfilePage() {
    
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Perfil do Desenvolvedor" 
        />

        <main>
            
                <fieldset>
                    <legend>Seus dados</legend>

                
                </fieldset>
            
    </main>
</div>
        
    )

}
export default ProfilePage