import NavBar from "../components/NavBar.jsx"
import { useAuth } from "../context/AuthContext.jsx"

const AdminPanel = ()=>{
    const { user } = useAuth();

    if (user === null || user.email !== "xmercado656@gmail.com") {
        return(
            <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
                <NavBar/>
                <h2 className="text-center mt-5">No tienes autorización para usar el panel administrativo</h2>
            </div>
        )
    }
    return(
        <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <form className="container mt-5 d-flex flex-column w-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="name">Nombre del producto</label>
                    <input type="name" id="name" className="form-control" />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="price">Precio</label>
                    <input type="number" id="price" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="url">URL Imagen</label>
                    <input type="url" id="url" className="form-control" />
                </div>
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label me-3" htmlFor="category">Categoria</label>
                    <select id="category">
                                <option value="cpu">Procesadores - cpu</option>
                                <option value="gpu">Tarjetas Graficas - gpu</option>
                                <option value="ram">Memorias RAM - ram</option>
                                <option value="mb">Placas Madre - mb</option>
                    </select>
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="description">Descripción del producto</label><br></br>
                    <textarea id="description" rows={5} cols={30}></textarea>
                </div>
                
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn border-white btn-block mb-4 w-50">Registrar Producto</button>
            </form>
        </div>
    )
}

export default AdminPanel