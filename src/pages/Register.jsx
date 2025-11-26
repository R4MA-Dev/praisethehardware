import NavBar from "../components/NavBar.jsx"
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await register(email, password);
            alert("Usuario registrado!");
            navigate("/");} 
        catch (err) {
            console.log(err.message);
            if (err.message = "Firebase: Error (auth/email-already-in-use)."){
                alert("El correo ingresado ya esta registrado")
            }
        }
    };

    return(
        <div style={{height: "100dvh", overflowY: "hidden", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <form onSubmit={handleSubmit} className="container mt-5 d-flex flex-column w-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="email">Correo electronico</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" className="form-control" />
                </div>
                
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-50">Registrarse</button>
            </form>
        </div>
    )
}

export default Register