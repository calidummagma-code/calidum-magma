import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";

import Discografia from "./components/Discografia";
import Bolos from "./components/Bolos";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";


export default function App(){

    return (

        <Routes>

            {/* PANTALLA INICIAL */}
            <Route
                path="/"
                element={<SplashScreen />}
            />


            {/* PAGINA PRINCIPAL */}
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


            {/* SI LA RUTA NO EXISTE */}
            <Route
                path="*"
                element={<Home />}
            />


        </Routes>

    );

}