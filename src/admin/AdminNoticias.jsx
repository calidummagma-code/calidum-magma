import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

import "./Admin.css";


export default function AdminNoticias() {


    const [noticias, setNoticias] = useState([]);

    const [titulo, setTitulo] = useState("");

    const [contenido, setContenido] = useState("");

    const [archivo, setArchivo] = useState(null);



    async function cargarNoticias() {


        const { data, error } = await supabase
            .from("noticias")
            .select("*")
            .order("created_at", { ascending: false });


        if (!error) {

            setNoticias(data || []);

        }

    }



    useEffect(() => {

        cargarNoticias();

    }, []);





    async function guardarNoticia() {


        if (!titulo.trim()) {

            alert("Escribe un título.");

            return;

        }


        if (!contenido.trim()) {

            alert("Escribe el contenido.");

            return;

        }



        let imagen = "";


        const miniatura = Math.floor(Math.random() * 4) + 1;




        if (archivo) {


            const nombreArchivo =
                `${Date.now()}-${archivo.name}`;



            const { error: uploadError } =
                await supabase.storage
                .from("noticias")
                .upload(nombreArchivo, archivo);



            if (uploadError) {


                console.log(
                    "ERROR STORAGE:",
                    uploadError
                );


                alert(
                    "Error subiendo imagen: "
                    + uploadError.message
                );


                return;

            }




            const { data: urlData } =
                supabase.storage
                .from("noticias")
                .getPublicUrl(nombreArchivo);



            imagen = urlData.publicUrl;


        }




        const { error } =
            await supabase
            .from("noticias")
            .insert([{

                titulo,

                contenido,

                imagen,

                miniatura

            }]);





        if (error) {


            console.log(
                "ERROR TABLA:",
                error
            );


            alert(
                "Error guardando noticia: "
                + error.message
            );


            return;


        }




        alert("Noticia publicada");



        setTitulo("");

        setContenido("");

        setArchivo(null);



        cargarNoticias();


    }






    async function borrar(id) {


        if (!window.confirm("¿Eliminar noticia?"))
            return;



        await supabase
            .from("noticias")
            .delete()
            .eq("id", id);



        cargarNoticias();


    }





    return (



        <div className="adminContenido">


            <h2>
                📰 Noticias
            </h2>




            <div className="adminCard">



                <input
                    type="text"
                    placeholder="Título de la noticia"
                    value={titulo}
                    onChange={(e)=>setTitulo(e.target.value)}
                />




                <textarea
                    rows="8"
                    placeholder="Contenido de la noticia..."
                    value={contenido}
                    onChange={(e)=>setContenido(e.target.value)}
                />




                <label>
                    Imagen (opcional)
                </label>




                <input
                    type="file"
                    accept="image/*"
                    onChange={(e)=>setArchivo(e.target.files[0])}
                />





                <button
                    className="adminGuardar"
                    onClick={guardarNoticia}
                >

                    Publicar noticia

                </button>




            </div>






            <h3 style={{marginTop:40}}>
                Noticias publicadas
            </h3>






            {noticias.length === 0 && (

                <p>
                    No hay noticias.
                </p>

            )}








            {noticias.map((n)=>(




                <div
                    className="adminFila"
                    key={n.id}
                >





                    <div className="adminNoticiaImagen">


                        <img
                            src={
                                n.imagen
                                ?
                                n.imagen
                                :
                                `/assets/noticias/miniatura-${n.miniatura}.jpg`
                            }
                            alt={n.titulo}
                        />


                    </div>






                    <div className="adminFilaTexto">


                        <strong>
                            {n.titulo}
                        </strong>



                        <br />



                        <small>

                            {
                            new Date(n.created_at)
                            .toLocaleDateString()
                            }

                        </small>


                    </div>






                    <button
                        className="adminEliminar"
                        onClick={()=>borrar(n.id)}
                    >

                        Eliminar

                    </button>





                </div>



            ))}



        </div>



    );


}