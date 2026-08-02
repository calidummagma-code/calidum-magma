import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Discografia from "./components/Discografia";
import Bolos from "./components/Bolos";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";

import EPK from "./pages/EPK";
import Banda from "./pages/Banda";
import Bio from "./pages/Bio";
import Music from "./pages/Music";


export default function App() {

    return (

        <Routes>

            {/* INICIO */}
            <Route 
                path="/" 
                element={<Home />} 
            />

            <Route 
                path="/home" 
                element={<Home />} 
            />


            {/* SECCIONES PRINCIPALES */}
            <Route 
                path="/banda" 
                element={<Banda />} 
            />

            <Route 
                path="/discografia" 
                element={<Discografia />} 
            />

            <Route 
                path="/bolos" 
                element={<Bolos />} 
            />

            <Route 
                path="/galeria" 
                element={<Galeria />} 
            />

            <Route 
                path="/contacto" 
                element={<Contacto />} 
            />


            {/* PÁGINAS INTERNAS */}
            <Route 
                path="/epk" 
                element={<EPK />} 
            />

            <Route 
                path="/biografia" 
                element={<Bio />} 
            />

            <Route 
                path="/music" 
                element={<Music />} 
            />


            {/* RUTA DESCONOCIDA */}
            <Route 
                path="*" 
                element={<Home />} 
            />

        </Routes>

    );

}