import NavBar from "../components/NavBar.jsx"

const Register = ()=>{
    return(
        <div style={{height: "100dvh", overflowY: "hidden", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <form className="container mt-5 d-flex flex-column w-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="phone">Numero de telefono</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="username">Nombre y apellido</label>
                    <input type="name" id="username" name="username" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="email">Correo electronico</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" className="form-control" />
                </div>
                
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-50">Registrarse</button>
            </form>
        </div>
    )
}

export default Register