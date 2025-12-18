import { useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    async function cargar() {
      const ref = doc(db, "productos", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProducto({ id: snap.id, ...snap.data() });
      }else{
        navigate("/404", { replace: true })
      }
    }
    cargar();
  }, []);

  if (!producto) return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
      <div className="spinner-border text-danger" style={{width: "5rem", height: "5rem"}} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );

  const eliminarProducto = async ()=>{
    const ref = doc(db, "productos", id)
    deleteDoc(ref)

    swal({
      title: '¡Éxito!',
      text: 'Se elimino el producto de la base de datos',
      icon: 'success',
      buttons: false,
      timer: 3000 
    });
    navigate("/")
  }

  return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <div className="container mt-5">
        <div className="row">

            {/* Imagen */}
            <div className="col-md-6">
            <img
                src={producto.img}
                className="img-fluid rounded"
                alt={producto.name}
            />
            </div>

            {/* Info */}
            <div className="col-md-6">
            <h2>{producto.name}</h2>
            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>{producto.description}</p>
            <h3 className="text-primary">${producto.price}</h3>
            {
                user ? (
                    <>
                        <button
                            className="btn btn-success mt-3"
                            onClick={() => {agregarAlCarrito(producto)
                                          swal({
                                            title: '¡Éxito!',
                                            text: 'Se añadio el producto al carrito',
                                            icon: 'success',
                                            confirmButtonText: 'Aceptar'
                                          });
                            }}
                        >Añadir al carrito</button>
                    </>
                ) : (
                    <>
                        <span style={{color : "red"}}>Debes iniciar sesión para poder agregar productos al carrito</span>
                    </>
                )
            }
            <br />
            {
              user && user.email === "xmercado656@gmail.com" ? (
                                    <>
                        <button
                            className="btn btn-success mt-3"
                            onClick={() => eliminarProducto()}
                        >Eliminar Producto (Solo Admin)</button>
                    </>
              ) : (
                <></>
              )
            }  
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProductoDetalle;
