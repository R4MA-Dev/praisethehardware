import { Route, Routes } from "react-router-dom"
import Carrito from "./pages/Carrito.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </>
  )
}

export default App
