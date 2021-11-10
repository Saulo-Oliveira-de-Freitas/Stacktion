import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';


import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnnecions, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>Stacktion</h1>
                    <h2>Sua plataforma de Freelancing online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-img"
                />

                <div className="buttons-container">
                    <Link to="/Cliente" className="study">
                        Quero Contratar
                    </Link>
                    <Link to="Login/Dev" className="give-classes">
                        Quero Trabalhar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnnecions} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;