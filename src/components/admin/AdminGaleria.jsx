import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabase/client";
import "./Admin.css";

export default function AdminGaleria() {

    const [imagenes, setImagenes] = useState([]);
    const [archivos, setArchivos] = useState([]);
    const [subiendo, setSubiendo] = useState(false);
    const inputFotos = useRef(null);
    useEffect(() => {

        cargarGaleria();

    }, []);

    async function cargarGaleria() {

        const { data, error } = await supabase
            .from("galeria")
            .select("*")
            .order("orden", { ascending: true });

        if (error) {

            alert(error.message);
            return;

        }

        setImagenes(data || []);

    }

    async function subirImagen() {

        if (archivos.length === 0) {

            alert("Selecciona alguna imagen");
            return;

        }

        setSubiendo(true);

        let ordenActual = imagenes.length;

        for (const archivo of archivos) {
            const esVideo = archivo.type.startsWith("video/");

            const nombreArchivo =
                Date.now() +
                "_" +
                Math.random().toString(36).substring(2) +
                "_" +
                archivo.name.replace(/\s+/g, "_");

            const { error: errorUpload } = await supabase.storage
                .from("galeria")
                .upload(nombreArchivo, archivo);

            if (errorUpload) {

                alert(errorUpload.message);
                setSubiendo(false);
                return;

            }

            const { data: urlData } = supabase.storage
                .from("galeria")
                .getPublicUrl(nombreArchivo);

            ordenActual++;

            const { error } = await supabase
                .from("galeria")
               .insert([
    {
        titulo: archivo.name,
        url: urlData.publicUrl,
        tipo: esVideo ? "video" : "foto",
        orden: ordenActual
    }
]);
            if (error) {

                alert(error.message);
                setSubiendo(false);
                return;

            }

        }

        alert("Fotos añadidas correctamente");

        setArchivos([]);
            if (inputFotos.current) {
    inputFotos.current.value = "";
}




        await cargarGaleria();

        setSubiendo(false);

    }

    async function borrarImagen(imagen) {

        if (!confirm("Eliminar esta foto?"))
            return;

        const nombreArchivo = imagen.url
            .split("/")
            .pop()
            .split("?")[0];

        await supabase.storage
            .from("galeria")
            .remove([nombreArchivo]);

        const { error } = await supabase
            .from("galeria")
            .delete()
            .eq("id", imagen.id);

        if (error) {

            alert(error.message);
            return;

        }

        cargarGaleria();

    }

    return (

        <div>

            <h1>Galeria</h1>

            <div className="adminForm">

                <label>Seleccionar imatges</label>

                <input
                    ref={inputFotos}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) =>
                        setArchivos(Array.from(e.target.files))
                    }
                />

                {archivos.length > 0 && (

                    <p style={{ color: "white" }}>
                        📷 {archivos.length} fotos seleccionades
                    </p>

                )}

                <button
                    className="botonPrincipal"
                    onClick={subirImagen}
                    disabled={subiendo}
                    style={{
                        opacity: subiendo ? 0.6 : 1,
                        cursor: subiendo ? "not-allowed" : "pointer"
                    }}
                >
                    {subiendo
                        ? "⏳ Pujant fotos..."
                        : "📸 Pujar fotos y videos"}
                </button>

            </div>

            <hr style={{ margin: "40px 0" }} />

            <h2>Fotos actuals</h2>

            {imagenes.length === 0 && (

                <p>No hi ha fotos.</p>

            )}

            {imagenes.map((imagen) => (

                <div
                    key={imagen.id}
                    className="listaConcert"
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                        }}
                    >

                        <img
                            src={imagen.url}
                            alt={imagen.titulo}
                            style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                border: "2px solid #7A1F2B"
                            }}
                        />

                        <div>

                            <h3>{imagen.titulo}</h3>

                            <p>
                                Ordre: {imagen.orden}
                            </p>

                        </div>

                    </div>

                    <div className="botonesLista">

                        <button
                            onClick={() => borrarImagen(imagen)}
                        >
                            🗑 Eliminar
                        </button>

                    </div>

                </div>

            ))}

        </div>

    );

}