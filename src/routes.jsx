import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Comentarios from "./pages/Comentarios";
import Contato from "./pages/Contato"; 


function AppRoutes () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} ></Route> 
            <Route path="sobre" element={<Sobre />} ></Route> 
            <Route path="comentarios" element={<Comentarios />} ></Route> 
            <Route path="contato" element={<Contato />} ></Route> 
        </Routes>
        </BrowserRouter>
       


    )
}

export default AppRoutes
