import { Route, Routes } from "react-router-dom"
import Carrito from "./pages/Carrito.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import ProductoDetalle from "./pages/ProductoDetalle.jsx"
import AdminPanel from "./pages/AdminPanel.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/panel" element={<AdminPanel />} />
      </Routes>
    </>
  )
}

export default App
