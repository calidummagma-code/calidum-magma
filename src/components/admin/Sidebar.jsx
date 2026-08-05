import { supabase } from "../../supabase/client";
import "./Admin.css";


export default function Sidebar({ setSeccion }) {


    async function cerrarSesion() {

        await supabase.auth.signOut();

        window.location.reload();

    }



    return (


        <aside className="adminSidebar">



            <h2>
                CALIDUM MAGMA
            </h2>




            <button
                onClick={() => setSeccion("concerts")}
            >
                📅 Concerts
            </button>



            <button
                onClick={() => setSeccion("discografia")}
            >
                🎵 Discografia
            </button>




            <button
                onClick={() => setSeccion("galeria")}
            >
                🖼 Galeria
            </button>




            <button
                onClick={() => setSeccion("musica")}
            >
                🎧 Música
            </button>




            


            <button
                onClick={() => setSeccion("noticias")}
            >
                📰 Notícies
            </button>




            <button
                onClick={() => setSeccion("botiga")}
            >
                👕 Botiga
            </button>






            <button
                className="botonLogout"
                onClick={cerrarSesion}
            >
                🚪 Tancar sessió
            </button>




        </aside>


    );


}