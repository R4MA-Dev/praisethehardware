import { Link } from "react-router-dom"

import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { browserSessionPersistence, setPersistence } from "firebase/auth";
import { auth } from "../data/firebaseConfig.js";

const Login = ()=>{
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await setPersistence(auth, browserSessionPersistence)
            await login(email, password);
            swal({
                title: '¡Éxito!',
                text: 'Se inicio sesión correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            navigate("/");} 
        catch (err) {
            console.log(err.message);
            
            if(err.message = "Firebase: Error (auth/invalid-credential)."){
                swal({
                    title: '¡Error!',
                    text: 'Los datos ingresados son incorrectos',
                    icon: 'warning',
                    dangerMode: true,
                    confirmButtonText: 'Aceptar'
                });
            }
        }
    };

    if(user !== null){
        return(
            <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
                <NavBar/>
                <h2 className="text-center mt-5">Ya has iniciado sesión</h2>
            </div>
        )
    }

    return(
        <div style={{height: "100dvh", overflowY: "hidden", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <form onSubmit={handleSubmit} className="container mt-5 d-flex flex-column w-100 vh-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="email">Correo electronico</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" className="form-control" />
                </div>
                
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn border-white btn-block mb-4 w-50">Iniciar Sesión</button>

                <div className="text-center">
                    <p>¿No estas registrado? <Link to="/register">Registrarse</Link></p>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Login