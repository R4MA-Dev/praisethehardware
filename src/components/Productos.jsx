import Producto from "./Producto.jsx"

import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";

const Productos = ({filtros})=>{
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        async function cargar() {
            const snap = await getDocs(collection(db, "productos"));
            const lista = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setProductos(lista);
            setProductosFiltrados(lista);
        }

        cargar();
    }, []);

    useEffect(() => {
        if (!filtros) return;

        const activas = Object.keys(filtros).filter(cat => filtros[cat]);

        if (activas.length === 0) {
            setProductosFiltrados(productos);
            return;
        }

        const filtrados = productos.filter(item =>
            activas.includes(item.category)
        );

        setProductosFiltrados(filtrados);

    }, [filtros, productos]);


    return(
        <div id="productos" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {
                productosFiltrados.map(item =>(
                    <Producto
                    img = {item.img}
                    price = {item.price}
                    name = {item.name}
                    category = {item.category}
                    key = {item.id}
                    id = {item.id}
                     />
                ))
            }
        </div>
    )
}

export default Productos