import logo from "../../icon.png"

import { Link, Route } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const NavBar = ()=>{
    const { user, logout } = useAuth();

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container row-gap-3">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
                src={logo}
                alt="Logo"
                className="me-2"
                style={{ height: "clamp(1.4rem, 2.2vw, 2.2rem)", width: "auto" }}
            />
          <span className="fw-bold">Praise The Hardware</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto row-gap-2">
            {
              user ? (
                <>
                  <li className="nav-item ms-lg-3">
                    <button onClick={logout} className="btn btn-outline-light d-flex align-items-center justify-content-center">
                      <i className="bi bi-person-fill me-2"></i> Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-lg-3">
                    <Link className="btn btn-outline-light d-flex align-items-center justify-content-center" to="/login">
                      <i className="bi bi-person-fill me-2"></i> Iniciar Sesión
                    </Link>
                  </li>
                </>
              )
            }

            {/* Icono del carrito */}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-light d-flex align-items-center justify-content-center" to="/carrito">
                <i className="bi bi-cart-fill me-2"></i> Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar