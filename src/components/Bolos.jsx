import conciertos from "../data/conciertos";
import entradaConcierto from "../assets/entrada-concierto.png";

import "./Bolos.css";

export default function Bolos() {

    const hoy = new Date();

    hoy.setHours(0, 0, 0, 0);

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

            {/* ===========================
                PRÓXIMS CONCERTS
            =========================== */}

            <div className="conciertosGrid">

                {proximos.map((concierto) => (

                    <article
                        key={concierto.id}
                        className="entradaCard"
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

            </div>

            {/* ===========================
                CONCERTS REALITZATS
            =========================== */}

            {pasados.length > 0 && (

                <>

                    <h2 className="tituloPasados">

                        CONCERTS REALITZATS

                    </h2>

                    <div className="conciertosGrid">

                        {pasados.map((concierto) => (

                            <article
                                key={concierto.id}
                                className="entradaCard pasada"
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

                                    <p>{concierto.hora} </p>
                                    <p>Entrada: {concierto.precio}</p>

                                </div>

                            </article>

                        ))}

                    </div>

                </>

            )}

        </section>

    );

}