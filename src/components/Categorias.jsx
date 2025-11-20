import { useState } from "react";

const Categorias = ({ onFiltrar }) => {
    const [categorias, setCategorias] = useState({
        cpu: false,
        gpu: false,
        ram: false,
        mb: false
    });

    // Actualizar estado al marcar/desmarcar
    const handleChange = (e) => {
        setCategorias({
            ...categorias,
            [e.target.id]: e.target.checked
        });
    };

    return (
        <div id="categorias" className="d-flex flex-column align-items-center p-3">
            <ul className="d-flex flex-column">
                <li>
                    <input id="cpu" type="checkbox" onChange={handleChange} />
                    <label htmlFor="cpu">Procesadores</label>
                </li>
                <li>
                    <input id="gpu" type="checkbox" onChange={handleChange} />
                    <label htmlFor="gpu">Tarjetas Gráficas</label>
                </li>
                <li>
                    <input id="ram" type="checkbox" onChange={handleChange} />
                    <label htmlFor="ram">Memorias RAM</label>
                </li>
                <li>
                    <input id="mb" type="checkbox" onChange={handleChange} />
                    <label htmlFor="mb">Placas Madre</label>
                </li>
            </ul>

            <button
                className="btn btn-danger w-50"
                onClick={() => onFiltrar(categorias)}
            >
                Aplicar filtros
            </button>
        </div>
    );
};


/*const Categorias = ()=>{
    return(
        <div id="categorias" className="d-flex flex-column flex-nowrap align-items-center">
            <ul className="d-flex flex-column flex-nowrap">
                <li>
                    <input id="cpu" type="checkbox" />
                    <label htmlFor="cpu">Procesadores</label>
                </li>
                <li>
                    <input id="gpu" type="checkbox" />
                    <label htmlFor="gpu">Tarjetas Graficas</label>
                </li>
                <li>
                    <input id="ram" type="checkbox" />
                    <label htmlFor="ram">Memorias RAM</label>
                </li>
                <li>
                    <input id="mb" type="checkbox" />
                    <label htmlFor="mb">Placas Madre</label>
                </li>
            </ul>
            <button className="btn btn-danger w-50">Aplicar filtros</button>
        </div>
    )
}*/

export default Categorias