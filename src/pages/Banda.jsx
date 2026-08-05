import "./Banda.css";

import { useState } from "react";
import personajes from "../assets/personajes-epk.jpg";

export default function Banda() {

    const miembros = [

        {
            nombre: "DAVID",
            instrumento: "BAIX i CORS",
            texto: "Baixista i motor rítmic i solista de la banda. Manté la solidesa del directe amb una base contundent i precisa."
        },

        {
            nombre: "PILI",
            instrumento: "VEU i CORS",
            texto: "Veu principal de Calidum Magma. Combina sensibilitat, força i una gran presència escènica."
        },

        {
            nombre: "JOE LOVE SHIVA",
            instrumento: "GUITARRA i CORS",
            texto: "Responsable dels riffs, solos i una part del caràcter sonor de la banda."
        },

        {
            nombre: "SURFERCALAVERA",
            instrumento: "BATERIA",
            texto: "L'energia del grup. Marca el ritme amb potència, precisió i una actitud imparable."
        }

    ];

    const [actiu, setActiu] = useState(0);

    return (

        <main className="bandaPagina">

            <button
                className="cerrarBanda"
                onClick={() => window.history.back()}
            >
                ✕
            </button>

            <span className="numero">
                02
            </span>

            <h1>
                LA BANDA
            </h1>

            <div className="fotoBanda">

                <div className="fitxaSuperior">

                    <h2>
    {miembros[actiu].nombre}
    <strong>
        {miembros[actiu].instrumento}
    </strong>
</h2>
                    <p>
                        {miembros[actiu].texto}
                    </p>

                </div>

                <img
                    src={personajes}
                    alt="Calidum Magma"
                />

                {miembros.map((miembro, index) => (

                    <div
                        key={index}
                        className={`zona zona${index + 1}`}
                        onMouseEnter={() => setActiu(index)}
                    />

                ))}

            </div>

        </main>

    );

}