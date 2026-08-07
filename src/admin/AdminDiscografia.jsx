import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import "./Admin.css";

export default function AdminDiscografia() {

    const [discos, setDiscos] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [tipo, setTipo] = useState("");
    const [anio, setAnio] = useState("");
    const [spotify, setSpotify] = useState("");
    const [youtube, setYoutube] = useState("");
    const [applemusic, setApplemusic] = useState("");

    const [portada, setPortada] = useState(null);

    useEffect(() => {

        cargarDiscos();

    }, []);

    async function cargarDiscos() {

        const { data, error } = await supabase
            .from("discografia_v2")
            .select("*")
            .order("anio", { ascending: false });

        if (error) {

            alert(error.message);
            return;

        }

        setDiscos(data || []);

    }

    async function guardarDisco() {

        let urlPortada = "";

        if (portada) {

            const nombreArchivo =
                Date.now() + "_" + portada.name.replace(/\s+/g, "_");

            const { error } = await supabase.storage
                .from("discografia")
                .upload(nombreArchivo, portada);

            if (error) {

                alert(error.message);
                return;

            }

            const { data } = supabase.storage
                .from("discografia")
                .getPublicUrl(nombreArchivo);

            urlPortada = data.publicUrl;

        }

        const { error } = await supabase
            .from("discografia_v2")
            .insert([
                {
                    titulo,
                    tipo,
                    anio,
                    spotify,
                    youtube,
                    applemusic,
                    portada: urlPortada
                }
            ]);

        if (error) {

            alert(error.message);
            return;

        }

        alert("Disc guardat correctament");

        setTitulo("");
        setTipo("");
        setAnio("");
        setSpotify("");
        setYoutube("");
        setApplemusic("");
        setPortada(null);

        cargarDiscos();

    }

    async function borrarDisco(id) {

        if (!confirm("Eliminar aquest disc?")) return;

        const { error } = await supabase
            .from("discografia_v2")
            .delete()
            .eq("id", id);

        if (error) {

            alert(error.message);
            return;

        }

        cargarDiscos();

    }

    return (

        <div>

            <h1>Discografia</h1>

            <div className="adminForm">

                <input
                    placeholder="Títol del disc"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                    placeholder="Tipus (LP, EP, Single...)"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />

                <input
                    placeholder="Any"
                    value={anio}
                    onChange={(e) => setAnio(e.target.value)}
                />

                <input
                    placeholder="Spotify"
                    value={spotify}
                    onChange={(e) => setSpotify(e.target.value)}
                />

                <input
                    placeholder="Youtube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />

                <input
                    placeholder="Apple Music"
                    value={applemusic}
                    onChange={(e) => setApplemusic(e.target.value)}
                />

                <label
                    style={{
                        fontWeight: "bold",
                        marginTop: "10px"
                    }}
                >
                    Portada del disc
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPortada(e.target.files[0])}
                />

                <button
                    className="botonPrincipal"
                    onClick={guardarDisco}
                >
                    💾 Guardar disc
                </button>

            </div>

            <hr />

            <h2>Discos actuals</h2>

                        {discos.length === 0 ? (

                <p>
                    Encara no hi ha cap disc.
                </p>

            ) : (

                discos.map((disco) => (

                    <div
                        key={disco.id}
                        className="listaConcert"
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px"
                            }}
                        >

                            {disco.portada && (

                                <img
                                    src={disco.portada}
                                    alt={disco.titulo}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderRadius: "6px",
                                        border: "2px solid #7A1F2B"
                                    }}
                                />

                            )}

                            <div>

                                <h3>
                                    {disco.titulo}
                                </h3>

                                <p>
                                    <strong>Tipus:</strong> {disco.tipo}
                                </p>

                                <p>
                                    <strong>Any:</strong> {disco.anio}
                                </p>

                                {disco.spotify && (

                                    <p>

                                        <a
                                            href={disco.spotify}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Spotify
                                        </a>

                                    </p>

                                )}

                                {disco.youtube && (

                                    <p>

                                        <a
                                            href={disco.youtube}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            YouTube
                                        </a>

                                    </p>

                                )}

                                {disco.applemusic && (

                                    <p>

                                        <a
                                            href={disco.applemusic}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Apple Music
                                        </a>

                                    </p>

                                )}

                            </div>

                        </div>

                        <div className="botonesLista">

                            <button
                                onClick={() => borrarDisco(disco.id)}
                            >
                                🗑
                            </button>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

}