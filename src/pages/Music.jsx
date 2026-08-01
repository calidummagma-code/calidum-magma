import "./Music.css";

import { useState, useRef } from "react";

import fondo from "../assets/reproductor.jpg";

import tema1 from "../assets/music/01.-UN-DIMARTS-QUALSEVOL.mp3";
import tema2 from "../assets/music/02.-DIMECRES-LAUCA-DE-LORFIDAL.mp3";
import tema3 from "../assets/music/03.-DIJOUS-DE-TAQUICARDIA.mp3";
import tema4 from "../assets/music/04.-DIVENDRES-AMB-GANES-DE-TU.mp3";

export default function Music() {

    const canciones = [

        {
            titulo: "Un dimarts qualsevol",
            archivo: tema1
        },

        {
            titulo: "Dimecres: L'auca de l'Orfidal",
            archivo: tema2
        },

        {
            titulo: "Dijous de taquicàrdia",
            archivo: tema3
        },

        {
            titulo: "Divendres amb ganes de tu",
            archivo: tema4
        }

    ];


    const [actual, setActual] = useState(0);

    const audioRef = useRef(null);


    function reproducir(index) {

        setActual(index);

        setTimeout(() => {

            audioRef.current.play();

        }, 100);

    }


    function siguiente() {

        let nuevo = actual + 1;

        if (nuevo >= canciones.length) {

            nuevo = 0;

        }

        reproducir(nuevo);

    }


    function anterior() {

        let nuevo = actual - 1;

        if (nuevo < 0) {

            nuevo = canciones.length - 1;

        }

        reproducir(nuevo);

    }


    return (

        <main className="musicPage">


            <button
                className="cerrarMusic"
                onClick={() => window.history.back()}
            >

                ✕

            </button>



            <img
                src={fondo}
                alt=""
                className="fondoMusic"
            />


            <div className="overlayMusic" />


            <div className="contenidoMusic">


                <div className="cabeceraMusic">

                    <span className="numero">

                        05

                    </span>

                    <h1>

                        MÚSICA

                    </h1>

                </div>



                <h2>

                    HEBDÒMANA

                </h2>



                <div className="listaCanciones">


                    {

                        canciones.map((tema, index) => (


                            <div
                                key={index}
                                className={
                                    actual === index
                                        ? "tema activo"
                                        : "tema"
                                }
                            >

                                <button
                                    className="botonTema"
                                    onClick={() => reproducir(index)}
                                >

                                    <span>▶</span>

                                    {tema.titulo}

                                </button>



                                <a
    href={tema.archivo}
    download
    className="descargaTema"
>

    ⬇

    <span className="tooltipDescarga">

        Descarrega

    </span>

</a>

                            </div>


                        ))

                    }


                </div>



                <div className="playerMusic">


                    <button
                        onClick={anterior}
                    >

                        ⏮

                    </button>



                    <button
                        onClick={() => audioRef.current.play()}
                    >

                        ▶

                    </button>



                    <button
                        onClick={() => audioRef.current.pause()}
                    >

                        ❚❚

                    </button>



                    <button
                        onClick={siguiente}
                    >

                        ⏭

                    </button>


                </div>



                <audio

                    ref={audioRef}

                    controls

                    className="audioMusic"

                    src={canciones[actual].archivo}

                    onEnded={siguiente}

                />



                <div className="descargaActual">

                    <a
                        href={canciones[actual].archivo}
                        download
                        className="descargarTema"
                    >

                        ⬇ DESCARREGA LA CANÇÓ

                    </a>

                </div>


            </div>


        </main>

    );

}