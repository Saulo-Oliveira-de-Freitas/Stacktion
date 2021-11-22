import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import{api} from '../../services/api';




const DevItem = ({users}) => {
    function createNewConnection() {
        api.post('connections', {
            userId: users.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <div>
                    <strong>{users.nome}</strong>
                    
                </div>
            </header>

            <p>{users.bio}</p>

            <footer>
                <p>
                    Preço/hora <strong>R$ {users.valor}</strong> 
                </p>
                <a target="_black" onClick={createNewConnection} href={`https://wa.me/${users.telefone}`}>
                    <img src={whatsappIcon} alt="icone"/>
                    Entrar em contato  
                </a>
            </footer>
        </article>
    );
}  

export default DevItem;