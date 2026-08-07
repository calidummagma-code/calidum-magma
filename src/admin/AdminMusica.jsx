import { useEffect, useRef, useState } from "react";

import { supabase } from "../supabase/client";

import "./Admin.css";


export default function AdminMusica() {


    const [canciones, setCanciones] = useState([]);

    const [archivos, setArchivos] = useState([]);

    const [disco, setDisco] = useState("");

    const [inicio, setInicio] = useState(0);

    const [fin, setFin] = useState(30);

    const [subiendo, setSubiendo] = useState(false);

    const inputAudio = useRef(null);



    useEffect(() => {

        cargarMusica();

    }, []);



    async function cargarMusica() {


        const { data, error } = await supabase

            .from("musica")

            .select("*")

            .order("id", { ascending: false });



        if (error) {

            alert(error.message);
            return;

        }


        setCanciones(data || []);

    }




    async function subirMusica() {


        if (archivos.length === 0) {

            alert("Selecciona alguna canción");
            return;

        }



        if (disco.trim() === "") {

            alert("Escribe el nombre del disco");
            return;

        }



        setSubiendo(true);



        try {


            for (const archivo of archivos) {



                const nombreArchivo =

                    Date.now()

                    + "_"

                    + Math.random()
                        .toString(36)
                        .substring(2)

                    + "_"

                    + archivo.name.replace(/\s+/g, "_");




                const { error: uploadError } = await supabase.storage

                    .from("musica")

                    .upload(
                        nombreArchivo,
                        archivo
                    );



                if (uploadError) {

                    throw uploadError;

                }




                const { data: urlData } = supabase.storage

                    .from("musica")

                    .getPublicUrl(nombreArchivo);





                const { error: insertError } = await supabase

                    .from("musica")

                    .insert([

                        {

                            titulo:
                                archivo.name
                                    .replace(".mp3", "")
                                    .replace(".MP3", ""),


                            disco: disco,


                            url:
                                urlData.publicUrl,


                            inicio:
                                Number(inicio),


                            fin:
                                Number(fin)

                        }

                    ]);



                if (insertError) {

                    throw insertError;

                }



            }



            alert("Música subida correctamente");



            setArchivos([]);

            setDisco("");

            setInicio(0);

            setFin(30);



            if (inputAudio.current) {

                inputAudio.current.value = "";

            }



            cargarMusica();



        }

        catch(error) {

            alert(error.message);

        }


        finally {

            setSubiendo(false);

        }


    }





    async function borrarCancion(cancion) {


        const confirmar = window.confirm(

            `Eliminar "${cancion.titulo}"?`

        );



        if (!confirmar) return;



        const nombreArchivo =

            cancion.url.split("/").pop();




        const { error: storageError } = await supabase.storage

            .from("musica")

            .remove([nombreArchivo]);



        if (storageError) {

            alert(storageError.message);
            return;

        }




        const { error } = await supabase

            .from("musica")

            .delete()

            .eq(
                "id",
                cancion.id
            );



        if (error) {

            alert(error.message);
            return;

        }



        cargarMusica();


    }





    return (


        <div className="adminContenido">



            <h1>

                🎵 Música

            </h1>




            <div className="adminForm">



                <input

                    placeholder="Nom del disc"

                    value={disco}

                    onChange={(e)=>
                        setDisco(e.target.value)
                    }

                />




                <input

                    type="number"

                    placeholder="Inici (segons)"

                    value={inicio}

                    onChange={(e)=>
                        setInicio(e.target.value)
                    }

                />




                <input

                    type="number"

                    placeholder="Fi (segons)"

                    value={fin}

                    onChange={(e)=>
                        setFin(e.target.value)
                    }

                />




                <label>

                    Seleccionar cançons

                </label>



                <input

                    ref={inputAudio}

                    type="file"

                    accept="audio/mpeg"

                    multiple

                    onChange={(e)=>

                        setArchivos(

                            Array.from(
                                e.target.files
                            )

                        )

                    }

                />




                {
                    archivos.length > 0 && (


                        <div style={{
                            color:"white",
                            marginTop:"15px"
                        }}>


                            <p>

                                {archivos.length} cançons seleccionades

                            </p>



                            {
                                archivos.map(
                                    (archivo,index)=>(

                                        <div key={index}>

                                            🎵 {archivo.name}

                                        </div>

                                    )
                                )
                            }


                        </div>


                    )

                }





                <button

                    className="botonPrincipal"

                    onClick={subirMusica}

                    disabled={subiendo}

                >

                    {
                        subiendo

                        ? "Pujant..."

                        : "🎧 Pujar música"
                    }


                </button>




            </div>





            <hr style={{
                margin:"40px 0"
            }}/>





            <h2>

                Cançons actuals

            </h2>






            {
                canciones.length === 0 && (

                    <p>

                        No hi ha cançons.

                    </p>

                )

            }






            {

            canciones.map((cancion)=>(


                <div

                    key={cancion.id}

                    className="listaConcert"

                >




                    <div>


                        <h3>

                            {cancion.titulo}

                        </h3>



                        <p>

                            💿 {cancion.disco}

                        </p>




                        <p>

                            ▶ {cancion.inicio}s - {cancion.fin}s

                        </p>




                        <audio

                            controls

                            controlsList="nodownload"

                            preload="metadata"

                        >

                            <source

                                src={cancion.url}

                                type="audio/mpeg"

                            />


                        </audio>



                    </div>






                    <div className="botonesLista">


                        <button

                            onClick={()=>
                                borrarCancion(cancion)
                            }

                        >

                            🗑 Eliminar

                        </button>



                    </div>



                </div>


            ))

            }




        </div>


    );


}