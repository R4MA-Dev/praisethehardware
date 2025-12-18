import { useCart } from "../context/CartContext";
import { db } from "../data/firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

import NavBar from "../components/NavBar.jsx";

import swal from "sweetalert";

const Carrito = () => {
  const { carrito, total, borrarProducto, quitarUnidad, agregarAlCarrito, vaciarCarrito } = useCart();
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }


  if (carrito.length === 0) {
    return (
    <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
        <NavBar/>
        <h2 className="text-center mt-5">Tu carrito está vacío</h2>
    </div>)
  }

  const enviarPedido = async () => {

      if(user === null){
        swal({
            title: '¡Error!',
            text: 'Debes iniciar sesión para poder realizar el pedido',
            icon: 'warning',
            dangerMode: true,
            confirmButtonText: 'Aceptar'
        });
      }else{
        if(inputValue.length < 10){
            swal({
                title: '¡Error!',
                text: 'Debes añadir un número de telefono valido para realizar el pedido',
                icon: 'warning',
                dangerMode: true,
                confirmButtonText: 'Aceptar'
            });
        }else{
            const order = {
            email: user.email,
            productos: carrito,
            numero: inputValue,
            fecha: new Date().toISOString()
            };

            await addDoc(collection(db, "orders"), order);

            vaciarCarrito();
            swal({
                title: '¡Éxito!',
                text: 'Pedido realizado correctamente',
                icon: 'success',
                buttons: false,
                timer: 3000 
            });
        }

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
            <label className="me-2" >Número de telefono de contacto: </label>
            <input value={inputValue} onChange={handleChange} type="tel" id="tel"/>

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
