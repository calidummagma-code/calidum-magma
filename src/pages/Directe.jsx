import "./Directe.css";

import { useState, useEffect } from "react";

import fondoMusic from "../assets/home-bg.jpg";

export default function Directe() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const videos = [

        {
            titulo: "Rocanrola Cambrils",
            id: "0M-mmS9AJ00"
        },

        {
            titulo: "Hauries de ser fort",
            id: "a_ursM1jSuY"
        },

        {
            titulo: "Calidum Magma",
            id: "zQwqkoRvw0c"
        }

    ];

    const [videoActual, setVideoActual] = useState(videos[0]);

    return (

        <main className="directePagina">

            <img
                src={fondoMusic}
                alt=""
                className="fondoDirecte"
            />

            <div className="overlayDirecte"></div>

            <button
                className="tancarDirecte"
                onClick={() => window.history.back()}
            >
                ✕
            </button>

            <div className="contenidoDirecte">

                <div className="cabeceraDirecte">

                    <span className="numero">

                        03

                    </span>

                    <h1>

                        EL DIRECTE

                    </h1>

                </div>

                <div className="videoPrincipal">

                    <iframe

                        src={`https://www.youtube.com/embed/${videoActual.id}`}

                        title={videoActual.titulo}

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        allowFullScreen

                    />

                </div>

                <h2 className="tituloVideos">

                    SELECCIÓ DE DIRECTES

                </h2>

                <div className="llistaVideos">

                    {

                        videos.map((video, index) => (

                            <div

                                key={index}

                                className={`videoCard ${video.id === videoActual.id ? "actiu" : ""}`}

                                onClick={() => setVideoActual(video)}

                            >

                                <img

                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}

                                    alt={video.titulo}

                                />

                                <div className="play">

                                    ▶

                                </div>

                                <span>

                                    {video.titulo}

                                </span>

                            </div>

                        ))

                    }

                </div>

            </div>

        </main>

    );

}