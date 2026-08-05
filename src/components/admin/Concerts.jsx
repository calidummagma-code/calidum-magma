import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";

export default function Concerts() {

    const [fecha, setFecha] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [sala, setSala] = useState("");
    const [hora, setHora] = useState("");
    const [precio, setPrecio] = useState("");

    const [nuevo, setNuevo] = useState(false);
    const [concerts, setConcerts] = useState([]);
    const [editando, setEditando] = useState(null);

    useEffect(() => {

        cargarConcerts();

    }, []);

    async function cargarConcerts() {

        const { data, error } = await supabase
            .from("concerts")
            .select("*")
            .order("fecha", { ascending: true });

        if (error) {

            alert(error.message);
            return;

        }

        setConcerts(data);

    }

    async function guardarConcierto() {

        let error;

        if (editando) {

            const resultado = await supabase
                .from("concerts")
                .update({
                    fecha,
                    ciudad,
                    sala,
                    hora,
                    precio
                })
                .eq("id", editando);

            error = resultado.error;

        } else {

            const resultado = await supabase
                .from("concerts")
                .insert([
                    {
                        fecha,
                        ciudad,
                        sala,
                        hora,
                        precio
                    }
                ]);

            error = resultado.error;

        }

        if (error) {

            alert(error.message);
            return;

        }

        alert("Concierto guardado correctamente.");

        setFecha("");
        setCiudad("");
        setSala("");
        setHora("");
        setPrecio("");

        setEditando(null);
        setNuevo(false);

        cargarConcerts();

    }

    async function borrarConcierto(id) {

        if (!confirm("¿Eliminar este concierto?")) return;

        const { error } = await supabase
            .from("concerts")
            .delete()
            .eq("id", id);

        if (error) {

            alert(error.message);
            return;

        }

        cargarConcerts();

    }

    function editarConcierto(concert) {

        setFecha(concert.fecha);
        setCiudad(concert.ciudad);
        setSala(concert.sala);
        setHora(concert.hora);
        setPrecio(concert.precio);

        setEditando(concert.id);
        setNuevo(true);

    }

    return (

        <div style={{ color: "white" }}>

            <h1>Concerts</h1>

            <button
                className="botonPrincipal"
                onClick={() => {

                    setNuevo(!nuevo);

                    if (nuevo) {

                        setEditando(null);
                        setFecha("");
                        setCiudad("");
                        setSala("");
                        setHora("");
                        setPrecio("");

                    }

                }}
            >
                {nuevo ? "✖ Cancelar" : "➕ Nou concert"}
            </button>

            {nuevo && (

                <div className="adminForm">

                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />

                    <input
                        placeholder="Ciutat"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />

                    <input
                        placeholder="Sala"
                        value={sala}
                        onChange={(e) => setSala(e.target.value)}
                    />

                    <input
                        placeholder="Hora"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />

                    <input
                        placeholder="Preu"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />

                    <button
                        className="botonPrincipal"
                        onClick={guardarConcierto}
                    >
                        {editando ? "Guardar canvis" : "Guardar concert"}
                    </button>

                </div>

            )}

            <hr style={{ margin: "40px 0" }} />

            <h2>Concerts existents</h2>

            {concerts.length === 0 && (

                <p>No hi ha concerts.</p>

            )}

            {concerts.map((concert) => (

                <div
                    key={concert.id}
                    className="listaConcert"
                >

                    <div>

                        <h3 style={{ margin: 0 }}>
                            {concert.ciudad}
                        </h3>

                        <p>📅 {concert.fecha}</p>

                        <p>📍 {concert.sala}</p>

                        <p>🕒 {concert.hora}</p>

                        <p>💶 {concert.precio}</p>

                    </div>

                    <div className="botonesLista">

                        <button
                            onClick={() => editarConcierto(concert)}
                        >
                            ✏️ Editar
                        </button>

                        <button
                            onClick={() => borrarConcierto(concert.id)}
                        >
                            🗑 Eliminar
                        </button>

                    </div>

                </div>

            ))}

        </div>

    );

}