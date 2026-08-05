import "./Noticias.css";

import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export default function Noticias() {

    const [noticias, setNoticias] = useState([]);
    const [noticiaActiva, setNoticiaActiva] = useState(null);

    useEffect(() => {

        cargarNoticias();

    }, []);

    async function cargarNoticias() {

        const { data, error } = await supabase
            .from("noticias")
            .select("*")
            .eq("publicado", true)
            .order("created_at", { ascending: false });

        if (!error) {

            setNoticias(data);

        }

    }

    return (

        <main className="noticias">

            <h1 className="tituloNoticias">
                NOTÍCIES
            </h1>

            <div className="listaNoticias">

                {

                    noticias.map((item) => (

                        <article
                            key={item.id}
                            className="tarjetaNoticia"
                        >

                            <img
                                src={item.imagen}
                                alt={item.titulo}
                                className="miniaturaNoticia"
                            />

                            <div className="contenidoNoticia">

                                <h2>

                                    {item.titulo}

                                </h2>

                                <span className="fechaNoticia">

                                    {
                                        new Date(item.created_at)
                                        .toLocaleDateString("ca-ES")
                                    }

                                </span>

                                <p>

                                    {

                                        item.contenido.length > 180
                                        ?

                                        item.contenido.substring(0,180)+"..."

                                        :

                                        item.contenido

                                    }

                                </p>

                                <button
                                    className="leerMas"
                                    onClick={() => setNoticiaActiva(item)}
                                >

                                    LLEGIR MÉS →

                                </button>

                            </div>

                        </article>

                    ))

                }

            </div>

            {

                noticiaActiva && (

                    <div
                        className="modalNoticias"
                        onClick={() => setNoticiaActiva(null)}
                    >

                        <div
                            className="ventanaNoticia"
                            onClick={(e)=>e.stopPropagation()}
                        >

                            <button
                                className="cerrarNoticia"
                                onClick={() => setNoticiaActiva(null)}
                            >

                                ✕

                            </button>

                            <img
                                src={noticiaActiva.imagen}
                                alt=""
                                className="imagenGrande"
                            />

                            <h2>

                                {noticiaActiva.titulo}

                            </h2>

                            <span>

                                {
                                    new Date(noticiaActiva.created_at)
                                    .toLocaleDateString("ca-ES")
                                }

                            </span>

                            <p>

                                {noticiaActiva.contenido}

                            </p>

                        </div>

                    </div>

                )

            }

        </main>

    );

}