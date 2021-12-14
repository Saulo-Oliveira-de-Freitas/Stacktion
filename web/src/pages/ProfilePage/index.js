import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import DevItem from "../../components/DevItem";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

function ProfilePage() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Perfil do Desenvolvedor" />
      
      <main>
        <fieldset>
       
            <header>
              <div>
                <legend>Nome de usuario</legend>
              </div>
            </header>

            <p>biografia de usuario</p>

            <footer>
              <p>
                Preço/hora: <strong>R$ 11.22</strong>
              </p>
              
              <p>
                Telefone:<strong>  992714845</strong>
              </p>
            </footer>
          
          <strong>Skills de Desenvolvedor</strong>
          <ul>
            <li>react - pleno</li>
            <li>node - pleno</li>
            <li>typescript - pleno</li>
            <li>MongoDB - junior</li>
          </ul>
          
        </fieldset>
        
      </main>
    </div>
  );
}
export default ProfilePage;
