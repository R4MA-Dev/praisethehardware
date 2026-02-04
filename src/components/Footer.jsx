import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Footer = ()=>{
    return(
        <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
                <p className="col-md-4 mb-0 text-body-secondary">© 2025 Praise The Hardware</p> 
                <img
                    src={logo}
                    alt="Logo"
                    className="me-2"
                    style={{ height: "clamp(3rem, 4vw, 4rem)", width: "auto" }}
                />
                <ul className="nav col-md-4 justify-content-end"> 
                    <li className="nav-item"><Link to="/login" className="nav-link px-2 text-body-secondary">Loguearse</Link></li> 
                    <li className="nav-item"><Link to="/carrito" className="nav-link px-2 text-body-secondary">Carrito</Link></li> 
                    <li className="nav-item"><Link to="/contacto" className="nav-link px-2 text-body-secondary">Contacto</Link></li> 
                </ul> 
            </footer> 
        </div>
    )
}

export default Footer