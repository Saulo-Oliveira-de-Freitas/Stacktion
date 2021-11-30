import React, {useState, FormEvent} from 'react';
import {Link, useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';

import {api} from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function DevForm() {
    const history = useHistory();

    const [user, setUser] = useState('')
    const [tipo, setTipo] = useState('user')
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [bio, setBio] = useState('');
    const [valor, setValor] = useState('');


    function handleCreateClass(e) {
        e.preventDefault();

        api.post('/cadastro', {
            user: user,
            tipo: tipo,
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
            bio: bio,
            valor: Number(valor),
            createdAt: new Date(),
            updatedAt: new Date()
            
            
        }).then(() => {
            history.push('/');
            alert('cadastro concluído!');
            

            
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Bem vindo à Stacktion!" 
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="user" 
                            label="ID de usuário" 
                            value={user} 
                            onChange={(e) => {
                                setUser(e.target.value)
                            }} />


                        <Input 
                            name="nome" 
                            label="Nome completo" 
                            value={nome} 
                            onChange={(e) => {
                                setNome(e.target.value)
                            }} />
                        
                        <Input 
                            name="email" 
                            label="email"
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />    

                        <Input 
                            name="senha" 
                            label="Senha"
                            value={senha} 
                            onChange={(e) => {
                                setSenha(e.target.value)
                            }}
                        />

                        <Input 
                            name="telefone" 
                            label="Telefone (apenas números) "
                            value={telefone} 
                            onChange={(e) => {
                                setTelefone(e.target.value)
                            }}
                        />    

                        <Textarea 
                            name="bio" 
                            label="Biografia (fale um pouco sobre você)"
                            value={bio} 
                            onChange={(e) => {
                                setBio(e.target.value)
                            }}
                        />
    
                        <Input 
                            name="Valor" 
                            label="Custo da sua hora de Trabalho (Em R$) " 
                            value={valor}
                            onChange={(e) => {
                                setValor(e.target.value)
                            }}
                        />
                    </fieldset>

                        
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        
                        <button onSubmit={handleCreateClass} type="submit" > Salvar cadastro  </button>
                        
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default DevForm;