import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import{api} from '../../services/api';




const DevItem = ({user}) => {
    function createNewConnection() {
        api.post('connections', {
            userId: user.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <div>
                    <strong>{user.nome}</strong>
                    
                </div>
            </header>

            <p>{user.bio}</p>

            <footer>
                <p>
                    Preço/hora <strong>R$ {user.valor}</strong> 
                </p>
                <a target="_black" onClick={createNewConnection} href={`https://wa.me/${user.telefone}`}>
                    <img src={whatsappIcon} alt="icone"/>
                    Entrar em contato  
                </a>
            </footer>
        </article>
    );
}  

export default DevItem;