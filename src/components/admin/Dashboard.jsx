import { useState } from "react";

import Sidebar from "./Sidebar";
import Concerts from "./Concerts";
import AdminDiscografia from "./AdminDiscografia";
import AdminGaleria from "./AdminGaleria";
import AdminMusica from "./AdminMusica";
import AdminNoticias from "./AdminNoticias";
import AdminSales from "./AdminSales";

import "./Admin.css";

export default function Dashboard() {

    const [seccion, setSeccion] = useState("sales");

    return (

        <div className="adminPanel">

            <Sidebar
                setSeccion={setSeccion}
            />

            <main className="adminContent">

                {seccion === "concerts" && (

                    <Concerts />

                )}

                {seccion === "discografia" && (

                    <AdminDiscografia />

                )}

                {seccion === "galeria" && (

                    <AdminGaleria />

                )}

                {seccion === "musica" && (

                    <AdminMusica />

                )}

                {seccion === "noticias" && (

                    <AdminNoticias />

                )}

                {seccion === "sales" && (

                    <AdminSales />

                )}

            </main>

        </div>

    );

}