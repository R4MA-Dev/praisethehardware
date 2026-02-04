import { Link } from "react-router-dom"

const Producto = ({img, name, price, id, category})=>{
    return(

            <div className="col">
                <div className="card h-100" key={id} category={category}>
                    <img
                        src={img}
                        className="card-img-top img-fluid"
                        alt="Producto"
                        style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body text-center">
                        <h6 className="card-title h-25" style={{fontSize:"15px"}}>{name}</h6>
                        <p className="card-text" style={{fontSize:"20px"}}>{price} AR$</p>
                    <Link to={`/producto/${id}`}>
                        <button className="btn btn-danger w-100 product-link">Ver detalle</button>
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Producto