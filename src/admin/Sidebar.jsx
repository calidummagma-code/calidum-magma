import { supabase } from "../../supabase/client";
import { NavLink, useNavigate } from "react-router-dom";

import "./Admin.css";

export default function Sidebar() {

    const navigate = useNavigate();

    async function cerrarSesion() {

        await supabase.auth.signOut();

        navigate("/");

    }

    return (

        <aside className="adminSidebar">

            <p className="adminTitulo">
                PANEL DE CONTROL
            </p>

            <h2>
                CALIDUM MAGMA
            </h2>

            {/* ==========================================
                SALES
            ========================================== */}

            <NavLink
                to="/admin/sales"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                🏛️ Sales
            </NavLink>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                PROMOCIÓ
            ========================================== */}

            <NavLink
                to="/admin/noticias"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                📰 Notícies
            </NavLink>

            <NavLink
                to="/admin/galeria"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                🖼️ Galeria
            </NavLink>

            <NavLink
                to="/admin/concerts"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                📅 Concerts
            </NavLink>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                MÚSICA
            ========================================== */}

            <NavLink
                to="/admin/musica"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                🎧 Música
            </NavLink>

            <NavLink
                to="/admin/discografia"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                🎵 Discografia
            </NavLink>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                BOTIGA
            ========================================== */}

            <NavLink
                to="/admin/botiga"
                className={({ isActive }) =>
                    isActive
                        ? "adminBoton activo"
                        : "adminBoton"
                }
            >
                👕 Botiga
            </NavLink>

            <hr className="adminSeparadorMenu" />

            <button
                className="botonLogout"
                onClick={cerrarSesion}
            >
                🚪 Tancar sessió
            </button>

        </aside>

    );

}