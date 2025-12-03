import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Cargar carrito desde localStorage
    useEffect(() => {
        const stored = localStorage.getItem("carrito");
        if (stored) setCarrito(JSON.parse(stored));
    }, []);

    // Guardar carrito cada vez que cambie
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    // Agregar producto (incrementa cantidad si ya existe)
    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.id === producto.id);

            if (existe) {
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    // Quitar 1 unidad de un producto
    const quitarUnidad = (id) => {
        setCarrito(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );
    };

    // Eliminar producto completamente
    const borrarProducto = (id) => {
        setCarrito(prev => prev.filter(item => item.id !== id));
    };

    // Vaciar carrito
    const vaciarCarrito = () => setCarrito([]);

    // Total
    const total = carrito.reduce(
        (acc, item) => acc + Number(item.price * item.cantidad),
        0
    );

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                quitarUnidad,
                borrarProducto,
                vaciarCarrito,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
