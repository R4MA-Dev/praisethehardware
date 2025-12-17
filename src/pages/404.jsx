import { Link } from "react-router-dom"

const PageNotFound = ()=>{
    return(
        <div style={{backgroundColor : "#eae5e5"}}>
            <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <p className="fs-2 fw-medium mt-4">¡Oops! Pagina no encontrada.</p>
                    <p className="mt-4 mb-5">La ruta que estas buscando no se encuentra.</p>
                    <Link to="/" className="btn btn-dark fw-semibold rounded-pill px-4 py-2 custom-btn">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound