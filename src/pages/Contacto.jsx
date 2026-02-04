import { Link } from "react-router-dom"
import NavBar from "../components/NavBar.jsx"
import WAIcon from "../assets/WhatsApp.svg"
import GmailIcon from "../assets/Gmail.svg"

const Contacto = ()=>{
    return (
        <div style={{height: "100dvh", backgroundColor : "#eae5e5"}}>
            <NavBar />
            <h1 className="text-center mt-4">¿Necesitas contactar con nosotros?</h1>
            <h2 className="text-center">Contactanos ya sea por Email o via WhatsApp</h2>
            <div className="d-flex flex-column align-items-center gap-5 mt-4">
                <a className="text-center link-contacto" target="_blank" href="https://wa.link/5bgkgq"><img src={WAIcon} width="250px" /> <br/> +54 9 2614671464</a>
                <a className="text-center link-contacto" target="_blank" href="mailto:xmercado656@gmail.com"><img src={GmailIcon} width="250px" /> <br/> <br/>xmercado656@gmail.com</a>
            </div>
        </div>
    )
}

export default Contacto