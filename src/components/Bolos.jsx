import { useRef, useState, useEffect } from "react";

import conciertos from "../data/conciertos";
import entradaConcierto from "../assets/entrada-concierto.png";

import "./Bolos.css";

export default function Bolos() {

    const carruselRef = useRef(null);

    const [entradaSeleccionada, setEntradaSeleccionada] = useState(null);

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const moverIzquierda = () => {

        carruselRef.current?.scrollBy({

            left: -320,

            behavior: "smooth"

        });

    };

    const moverDerecha = () => {

        carruselRef.current?.scrollBy({

            left: 320,

            behavior: "smooth"

        });

    };

    const proximos = conciertos
        .filter((concierto) => {

            const fecha = new Date(concierto.fecha);
            fecha.setHours(0, 0, 0, 0);

            return fecha >= hoy;

        })
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    const pasados = conciertos
        .filter((concierto) => {

            const fecha = new Date(concierto.fecha);
            fecha.setHours(0, 0, 0, 0);

            return fecha < hoy;

        })
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    useEffect(() => {

        const timer = setTimeout(() => {

            if (!carruselRef.current || proximos.length === 0) return;

            const carrusel = carruselRef.current;
            const primer = carrusel.children[0];

            if (!primer) return;

            const scroll =
                primer.offsetLeft -
                (carrusel.clientWidth / 2) +
                (primer.clientWidth / 2);

            carrusel.scrollTo({

                left: scroll,

                behavior: "auto"

            });

        }, 100);

        return () => clearTimeout(timer);

    }, [proximos]);

    return (

        <section
            id="conciertos"
            className="bolos"
        >

            <h2 className="sectionTitle">

                BOLOS

            </h2>

            <p className="sectionSubtitle">

                On ens pots veure

            </p>

            <div className="carruselBolos">

                <div
                    className="flecha izquierda"
                    onClick={moverIzquierda}
                >
                    ❮
                </div>

                <div
                    className="conciertosGrid"
                    ref={carruselRef}
                >

                    {proximos.map((concierto) => (

                        <article
                            key={concierto.id}
                            className="entradaCard"
                            onClick={() => setEntradaSeleccionada(concierto)}
                        >

                            <img
                                src={entradaConcierto}
                                alt={concierto.ciudad}
                                className="entradaImg"
                            />

                            <div className="entradaInfo">

                                <h3>{concierto.ciudad}</h3>

                                <p>{concierto.fecha}</p>

                                <p>{concierto.sala}</p>

                                <p>{concierto.hora}</p>

                                <p>Entrada: {concierto.precio}</p>

                            </div>

                        </article>

                    ))}

                    {pasados.map((concierto) => (

                        <article
                            key={concierto.id}
                            className="entradaCard pasada"
                            onClick={() => setEntradaSeleccionada(concierto)}
                        >

                            <img
                                src={entradaConcierto}
                                alt={concierto.ciudad}
                                className="entradaImg"
                            />

                            <div className="entradaInfo">

                                <h3>{concierto.ciudad}</h3>

                                <p>{concierto.fecha}</p>

                                <p>{concierto.sala}</p>

                                <p>{concierto.hora}</p>

                                <p>Entrada: {concierto.precio}</p>

                            </div>

                            <div className="selloFinalizado">

                                CONCERT REALITZAT

                            </div>

                        </article>

                    ))}

                </div>

                <div
                    className="flecha derecha"
                    onClick={moverDerecha}
                >
                    ❯
                </div>

            </div>

                        {entradaSeleccionada && (

                <div
                    className="visorEntrada"
                    onClick={() => setEntradaSeleccionada(null)}
                >

                    <div
                        className="entradaGrande"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="cerrarVisor"
                            onClick={() => setEntradaSeleccionada(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={entradaConcierto}
                            alt={entradaSeleccionada.ciudad}
                            className={
                                new Date(entradaSeleccionada.fecha) < hoy
                                    ? "entradaGrandeImg pasada"
                                    : "entradaGrandeImg"
                            }
                        />

                        <div className="entradaGrandeInfo">

                            <h2>
                                {entradaSeleccionada.ciudad}
                            </h2>

                            <p>
                                {entradaSeleccionada.fecha}
                            </p>

                            <p>
                                {entradaSeleccionada.sala}
                            </p>

                            <p>
                                {entradaSeleccionada.hora}
                            </p>

                            <p>
                                Entrada: {entradaSeleccionada.precio}
                            </p>

                        </div>

                        {new Date(entradaSeleccionada.fecha) < hoy && (

                            <div className="selloGrande">

                                CONCERT REALITZAT

                            </div>

                        )}

                    </div>

                </div>

            )}

        </section>

    );

}