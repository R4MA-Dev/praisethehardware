import { useState } from "react"

import Header from "../components/Header.jsx"
import NavBar from "../components/NavBar.jsx"
import Categorias from "../components/Categorias.jsx"
import Productos from "../components/Productos.jsx"

import "../css/Productos.css"

function Home(){

    const [text, setText] = useState(false)
    const [btn, setBtn] = useState(false)

    const [filtros, setFiltros] = useState(null);

    const aplicarFiltros = (categoriasSeleccionadas) => {
        setFiltros(categoriasSeleccionadas);
    };

    return(
        <div style={{backgroundColor : "#eae5e5"}}>  
            <NavBar/>
            <Header/>
            <div className="container-lg my-4">
                <div className="row">

                    {/* CATEGORÍAS */}
                    <div className="col-12 col-md-3 mb-3">
                        <div className="col-12 mb-3">
                            <button
                                className="btn btn-outline-secondary w-100"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#categoriasCollapse"
                                aria-expanded="false"
                                aria-controls="categoriasCollapse"
                                onClick={(e)=>{
                                    !text ? setText(true) : setText(false)
                                    setBtn(true)
                                    setTimeout(()=>{
                                        setBtn(false)
                                    }, 500)
                                }}
                                disabled={btn}
                            >
                                {!text ? "Ver Categorias" : "Ocultar Categorias"}
                            </button>
                        </div>
                        <div className="collapse" id="categoriasCollapse">
                            <div className="bg-light rounded shadow-sm">
                                {/*<h5 className="mb-3 text-center">Categorías</h5>*/}
                                <Categorias onFiltrar={aplicarFiltros} />
                            </div>
                        </div>
                    </div>

                    {/* PRODUCTOS */}
                    <div className="col-12 col-md-9">
                            <Productos filtros={filtros} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home