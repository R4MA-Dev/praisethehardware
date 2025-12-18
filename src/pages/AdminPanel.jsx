import NavBar from "../components/NavBar.jsx"
import { useAuth } from "../context/AuthContext.jsx"
import { db } from "../data/firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AdminPanel = ()=>{
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user === null || user.email !== "xmercado656@gmail.com") {
        return(
            <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
                <NavBar/>
                <h2 className="text-center mt-5">No tienes autorización para usar el panel administrativo</h2>
            </div>
        )
    }

    const loadProduct = async (e)=>{
        e.preventDefault();

        const product = {
          category: e.target.category.value,
          description: e.target.description.value,
          img: e.target.url.value,
          name: e.target.name.value,
          price: e.target.price.value
        };

         await addDoc(collection(db, "productos"), product);

         swal({
            title: '¡Éxito!',
            text: 'El producto se cargo correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
         });
         navigate("/");
        
    }

    return(
        <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
            <NavBar/>
            <h2 className="text-center mt-3">Añadir un producto a la base de datos</h2>
            <form onSubmit={loadProduct} className="container mt-5 d-flex flex-column w-100 align-items-center">
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="name">Nombre del producto</label>
                    <input type="name" id="name" className="form-control" required />
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="price">Precio</label>
                    <input type="number" id="price" className="form-control" required />
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="url">URL Imagen</label>
                    <input type="url" id="url" className="form-control" required />
                </div>
                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label me-3" htmlFor="category">Categoria</label>
                    <select id="category" required>
                                <option value="cpu">Procesadores - cpu</option>
                                <option value="gpu">Tarjetas Graficas - gpu</option>
                                <option value="ram">Memorias RAM - ram</option>
                                <option value="mb">Placas Madre - mb</option>
                    </select>
                </div>

                <div data-mdb-input-init className="form-outline mb-4 w-75">
                    <label className="form-label" htmlFor="description">Descripción del producto</label><br></br>
                    <textarea id="description" rows={5} cols={35} required></textarea>
                </div>
                
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn border-white btn-block mb-4 w-50">Registrar Producto</button>
            </form>
        </div>
    )
}

export default AdminPanel