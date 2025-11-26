import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

import NavBar from "../components/NavBar.jsx";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useCart();
  const { user } = useAuth();


  useEffect(() => {
    async function cargar() {
      const ref = doc(db, "productos", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProducto({ id: snap.id, ...snap.data() });
      }
    }
    cargar();
  }, []);

  if (!producto) return <p>Cargando producto...</p>;

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
            <p className="text-muted">{producto.description}</p>
            <h3 className="text-primary">${producto.price}</h3>
            {
                user ? (
                    <>
                        <button
                            className="btn btn-success mt-3"
                            onClick={() => agregarAlCarrito(producto)}
                        >Añadir al carrito</button>
                    </>
                ) : (
                    <>
                        <span style={{color : "red"}}>Debes iniciar sesión para poder agregar productos al carrito</span>
                    </>
                )
            }  
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProductoDetalle;
