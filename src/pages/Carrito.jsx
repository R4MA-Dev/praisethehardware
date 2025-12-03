import { useCart } from "../context/CartContext";
import { db } from "../data/firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../context/AuthContext.jsx";

import NavBar from "../components/NavBar.jsx";

const Carrito = () => {
  const { carrito, total, borrarProducto, quitarUnidad, agregarAlCarrito, vaciarCarrito } = useCart();
  const { user } = useAuth();

  if (carrito.length === 0) {
    return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <h2 className="text-center mt-5">Tu carrito está vacío</h2>
    </div>)
  }


  const enviarPedido = async () => {
      if(user === null){
        alert("Debes iniciar sesión para finalizar la compra")
      }else{
        const order = {
          email: user.email,
          productos: carrito,
          fecha: new Date().toISOString()
        };

        await addDoc(collection(db, "orders"), order);

        vaciarCarrito();
        alert("Pedido enviado con éxito!");
      }

  };

  return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <div className="container mt-5">

            <h2>Tu carrito</h2>

            {carrito.map(item => (
                <div 
                    key={item.id} 
                    className="d-flex justify-content-between align-items-center border rounded-3 p-3 mb-2 bg-dark text-white"
                >
                    <div>
                        <h6>{item.name}</h6>
                        <small>Precio: ${item.price}</small>

                        <div className="d-flex align-items-center mt-2">
                            <button 
                                className="btn btn-outline-secondary btn-sm me-2"
                                onClick={() => quitarUnidad(item.id)}
                            >
                                -
                            </button>

                            <span className="px-3">{item.cantidad}</span>

                            <button 
                                className="btn btn-outline-secondary btn-sm ms-2"
                                onClick={() => agregarAlCarrito(item)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="text-end">
                        <p className="fw-bold">${item.price * item.cantidad}</p>

                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => borrarProducto(item.id)}
                        >
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            ))}

            <h3 className="mt-3">Total: ${total}</h3>

            <div className="mt-4 d-flex gap-3">
                <button className="btn btn-success" onClick={enviarPedido}>
                    Finalizar compra
                </button>

                <button className="btn btn-danger" onClick={vaciarCarrito}>
                    Vaciar carrito
                </button>
            </div>
        </div>
    </div>
  );
};

export default Carrito;
