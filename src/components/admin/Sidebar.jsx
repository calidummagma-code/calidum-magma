import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

import "./Admin.css";

export default function Sidebar({ setSeccion }) {

    const navigate = useNavigate();

    async function cerrarSesion() {

        await supabase.auth.signOut();

        navigate("/");

    }

    return (

        <aside className="adminSidebar">

            <h2>
                 CALIDUM MAGMA
            </h2>

            {/* ==========================================
                SALES
            ========================================== */}

            <button
                onClick={() => setSeccion("sales")}
            >
                🏛️ Sales
            </button>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                PROMOCIÓ
            ========================================== */}

            <button
                onClick={() => setSeccion("noticias")}
            >
                📰 Notícies
            </button>

            <button
                onClick={() => setSeccion("galeria")}
            >
                🖼️ Galeria
            </button>

            <button
                onClick={() => setSeccion("concerts")}
            >
                📅 Concerts
            </button>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                MÚSICA
            ========================================== */}

            <button
                onClick={() => setSeccion("musica")}
            >
                🎧 Música
            </button>

            <button
                onClick={() => setSeccion("discografia")}
            >
                🎵 Discografia
            </button>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                BOTIGA
            ========================================== */}

            <button
                onClick={() => setSeccion("botiga")}
            >
                👕 Botiga
            </button>

            <hr className="adminSeparadorMenu" />

            {/* ==========================================
                SORTIR
            ========================================== */}

            <button
                className="botonLogout"
                onClick={cerrarSesion}
            >
                🚪 Tancar sessió
            </button>

        </aside>

    );

}