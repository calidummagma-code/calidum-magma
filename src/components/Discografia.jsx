import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabase/client";
import "./Discografia.css";


export default function Discografia() {


    const [discos, setDiscos] = useState([]);

    const [cargando, setCargando] = useState(true);

    const [discoSeleccionado, setDiscoSeleccionado] = useState(null);


    const cintaRef = useRef(null);




    useEffect(() => {

        cargarDiscografia();

    }, []);





    async function cargarDiscografia(){


        const { data, error } = await supabase
            .from("discografia_v2")
            .select("*")
            .order("anio", {
                ascending:false
            });



        if(error){

            console.log(error.message);

            setCargando(false);

            return;

        }



        setDiscos(data || []);

        setCargando(false);


    }







    function moverCinta(direccion){


        if(cintaRef.current){


            cintaRef.current.scrollBy({

                left: direccion,

                behavior:"smooth"

            });


        }


    }







    return (


        <section
            className="discografia"
            id="discografia"
        >




            <div className="discografiaHeader">

                <div className="tituloBloque">

                    <h2 className="sectionTitle">
                        DISCOGRAFIA
                    </h2>

                </div>

            </div>









            {cargando && (

                <p>
                    Carregant discografia...
                </p>

            )}









            {!cargando && discos.length > 0 && (



                <div className="cintaWrapper">





                    <button

                        className="flechaDisco izquierda"

                        onClick={() => moverCinta(-330)}

                    >

                        ‹

                    </button>







                    <div

                        className="discografiaGrid"

                        ref={cintaRef}

                    >




                        {discos.map((disco)=>(



                            <article

                                className="discoCard"

                                key={disco.id}

                            >





                                <div className="discoCover">





                                    {disco.portada && (


                                        <img

                                            src={disco.portada}

                                            alt={disco.titulo}

                                            className="portadaClick"

                                            onClick={() =>
                                                setDiscoSeleccionado(disco)
                                            }

                                        />


                                    )}








                                    <div className="discoOverlay">



                                        <h3>
                                            {disco.titulo}
                                        </h3>




                                        <p>
                                            {disco.tipo}
                                        </p>




                                        <p>
                                            {disco.anio}
                                        </p>







                                        <div className="linksMusica">


                                            {disco.spotify && (

                                                <a
                                                    href={disco.spotify}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >

                                                    Spotify

                                                </a>

                                            )}






                                            {disco.youtube && (

                                                <a
                                                    href={disco.youtube}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >

                                                    YouTube

                                                </a>

                                            )}






                                            {disco.applemusic && (

                                                <a
                                                    href={disco.applemusic}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >

                                                    Apple Music

                                                </a>

                                            )}



                                        </div>




                                    </div>




                                </div>








                                <h3 className="tituloNormal">

                                    {disco.titulo}

                                </h3>







                            </article>



                        ))}





                    </div>








                    <button

                        className="flechaDisco derecha"

                        onClick={() => moverCinta(330)}

                    >

                        ›

                    </button>





                </div>



            )}









            {!cargando && discos.length === 0 && (

                <p>
                    Encara no hi ha discos disponibles.
                </p>

            )}












            {discoSeleccionado && (



                <div

                    className="lightbox"

                    onClick={() =>
                        setDiscoSeleccionado(null)
                    }

                >




                    <div

                        className="lightboxContenido"

                        onClick={(e)=>
                            e.stopPropagation()
                        }

                    >





                        <button

                            className="cerrarLightbox"

                            onClick={() =>
                                setDiscoSeleccionado(null)
                            }

                        >

                            ✕

                        </button>







                        <img

                            src={discoSeleccionado.portada}

                            alt={discoSeleccionado.titulo}

                        />








                        <div className="infoLightbox">





                            <h2>

                                {discoSeleccionado.titulo}

                            </h2>







                            <p>

                                {discoSeleccionado.tipo}

                                {" · "}

                                {discoSeleccionado.anio}

                            </p>







                            <div className="linksMusica">



                                {discoSeleccionado.spotify && (

                                    <a
                                        href={discoSeleccionado.spotify}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Spotify
                                    </a>

                                )}






                                {discoSeleccionado.youtube && (

                                    <a
                                        href={discoSeleccionado.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        YouTube
                                    </a>

                                )}







                                {discoSeleccionado.applemusic && (

                                    <a
                                        href={discoSeleccionado.applemusic}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Apple Music
                                    </a>

                                )}





                            </div>





                        </div>





                    </div>





                </div>



            )}






        </section>


    );


}