

function LoginPage() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    return(
        <div className="LoginPage">
        <h1>Login</h1>

        <input type="text" placeholder="email"/>
        <input type="text" placeholder="senha"/>

        <button> Entrar </button>
        </div>
    )}


export default LoginPage