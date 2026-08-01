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

            {/* PÁGINA PRINCIPAL */}
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/home"
                element={<Home />}
            />

            {/* SECCIONES */}
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
<Route path="/banda" element={<Banda />} />
            {/* SI LA RUTA NO EXISTE */}
            <Route
                path="*"
                element={<Home />}
            />
<Route
    path="/music"
    element={<Music />}
/>





<Route
    path="/biografia"
    element={<Bio />}
/>
            
<Route
    path="/epk"
    element={<EPK />}
/>

<Route
    path="/music"
    element={<Music />}
/>




        </Routes>

    );

}