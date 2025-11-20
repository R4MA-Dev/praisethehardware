import { Link } from "react-router-dom"
import Register from "./Register.jsx"
import NavBar from "../components/NavBar.jsx"

const Login = ()=>{
    return(
        <div style={{height: "100dvh", overflowY: "hidden", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <form className="container mt-5 d-flex flex-column w-100 vh-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="email">Correo electronico</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" className="form-control" />
                </div>
                
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-50">Iniciar Sesión</button>

                <div className="text-center">
                    <p>¿No estas registrado? <Link to="/register">Registrarse</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login