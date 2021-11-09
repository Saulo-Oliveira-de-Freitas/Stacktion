function cadastro() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    return(
        <div className="Cadastro">
        <h1>Cadastro</h1>
        <label> Email</label>
        <input type="text"  onchange= {(e)=>{
            setUsernameReg(e.target.value);
        }} placeholder="email"/>

        <label>Senha</label>
        <input type="text" onchange= {(e)=>{
            setPasswordReg(e.target.value);}} placeholder="senha"/>

        <button> Registrar-se </button>
        </div>
    )}


export default LoginPage