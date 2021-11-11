import React from 'react';

import { Link } from 'react-router-dom';


import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


const PageHeader = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <p>Stacktion</p>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }                

                {props.children}
            </div>            
        </header>
    );
}

export default PageHeader;