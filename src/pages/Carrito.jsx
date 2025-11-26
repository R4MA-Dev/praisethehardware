import { useCart } from "../context/CartContext";
import { db } from "../data/firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../context/AuthContext.jsx";

import NavBar from "../components/NavBar.jsx";

const Carrito = () => {
  const { carrito, borrarCarrito } = useCart();

  if (carrito.length === 0) {
    return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <h2 className="text-center mt-5">Tu carrito está vacío</h2>
    </div>)
  }

  const total = carrito.reduce((acc, p) => acc + Number(p.price), 0);

  const { user } = useAuth();

  const enviarPedido = async () => {
    const order = {
        email: user.email,
        productos: carrito,
        fecha: new Date().toISOString()
  };

    await addDoc(collection(db, "orders"), order);

    borrarCarrito();
    alert("Pedido enviado con éxito!");
  };


  return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <div className="container mt-5">
        <h2>Tu carrito</h2>

        {carrito.map((item, i) => (
            <div key={i} className="border rounded p-3 my-2 d-flex justify-content-between bg-dark text-white">
            <span>{item.name}</span>
            <span>${item.price}</span>
            </div>
        ))}

        <h3 className="mt-4">Total: ${total}</h3>

        <button className="btn btn-primary mt-3" onClick={enviarPedido}>
            Finalizar compra
        </button>

        <button className="btn btn-danger mt-3 ms-3" onClick={borrarCarrito}>
            Vaciar carrito
        </button>
        </div>
    </div>
  );
};

export default Carrito;
