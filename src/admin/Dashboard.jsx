import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Sidebar";

import Concerts from "./Concerts";
import AdminDiscografia from "./AdminDiscografia";
import AdminGaleria from "./AdminGaleria";
import AdminMusica from "./AdminMusica";
import AdminNoticias from "./AdminNoticias";
import AdminSales from "./sales/AdminSales";

import "./Admin.css";

export default function Dashboard() {

    return (

        <div className="adminPanel">

            <Sidebar />

            <main className="adminContent">

                <Routes>

                    {/* Al entrar en /admin irá automáticamente a Sales */}

                    <Route
                        index
                        element={<Navigate to="sales" replace />}
                    />

                    <Route
                        path="sales"
                        element={<AdminSales />}
                    />

                    <Route
                        path="concerts"
                        element={<Concerts />}
                    />

                    <Route
                        path="discografia"
                        element={<AdminDiscografia />}
                    />

                    <Route
                        path="galeria"
                        element={<AdminGaleria />}
                    />

                    <Route
                        path="musica"
                        element={<AdminMusica />}
                    />

                    <Route
                        path="noticias"
                        element={<AdminNoticias />}
                    />

                    {/* Temporal hasta crear el componente */}

                    <Route
                        path="botiga"
                        element={
                            <h1
                                style={{
                                    color: "#fff"
                                }}
                            >
                                Botiga (en construcción)
                            </h1>
                        }
                    />

                    {/* Cualquier ruta desconocida */}

                    <Route
                        path="*"
                        element={<Navigate to="sales" replace />}
                    />

                </Routes>

            </main>

        </div>

    );

}