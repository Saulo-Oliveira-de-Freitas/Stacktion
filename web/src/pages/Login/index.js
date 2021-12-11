import React, {useState, } from 'react';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import { api } from '../../services/api';



import './styles.css';

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function handleLogin(e) {
        e.preventDefault();

        api.post('/login', {
            email: email,
            senha: senha,
            
        }).then(() => {
            history.push('/');
            console.log('fsa')
            alert('login concluído!');
            

            
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }
    
    return(
        
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Login" 
        />

        <main>
            <form >
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                            name="email" 
                            label="email"
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />    

                        <Input 
                            type="password"
                            name="senha" 
                            label="Senha"
                            value={senha} 
                            onChange={(e) => {
                                setSenha(e.target.value)
                            }}
                        />

                    <Link to="/requestreset/" className= 'PasswordReset' > Esqueceu a senha? </Link>
                <footer>
                <button  onSubmit={handleLogin} type="submit">Entrar</button>
                <Link to="/cadastro" className= 'RegisterLink' >  Registre-se </Link>
                </footer>
                
                </fieldset>
            </form>
    </main>
</div>
        
    )

}
export default LoginPage