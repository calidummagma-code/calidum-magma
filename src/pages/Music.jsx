import "./Music.css";

import { useEffect, useState, useRef } from "react";

import { supabase } from "../supabase/client";

import fondo from "../assets/reproductor.jpg";


export default function Music() {


    const [canciones, setCanciones] = useState([]);

    const [actual, setActual] = useState(0);

    const audioRef = useRef(null);



    useEffect(() => {
             window.scrollTo(0, 0);
        cargarMusica();

    }, []);




    async function cargarMusica() {


        const { data, error } = await supabase

            .from("musica")

            .select("*")

            .order("id", { ascending:true });



        if (error) {

            console.log(error);

            return;

        }



        setCanciones(data || []);


    }





    function reproducir(index) {


        setActual(index);



        setTimeout(() => {


            if(audioRef.current){

                audioRef.current.play();

            }


        },100);


    }





    function siguiente(){


        let nuevo = actual + 1;



        if(nuevo >= canciones.length){

            nuevo = 0;

        }



        reproducir(nuevo);


    }





    function anterior(){


        let nuevo = actual - 1;



        if(nuevo < 0){

            nuevo = canciones.length - 1;

        }



        reproducir(nuevo);


    }







    if(canciones.length === 0){


        return (

            <main className="musicPage">


                <img

                    src={fondo}

                    className="fondoMusic"

                    alt=""

                />


                <div className="overlayMusic"/>



                <div className="contenidoMusic">


                    <h2>

                        Carregant música...

                    </h2>


                </div>



            </main>

        );


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

                className="fondoMusic"

                alt=""

            />



            <div className="overlayMusic"/>






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

                    {canciones[actual].disco}

                </h2>








                <div className="listaCanciones">



                    {


                    canciones.map((tema,index)=>(



                        <div

                            key={tema.id}

                            className={

                                actual === index

                                ? "tema activo"

                                : "tema"

                            }

                        >




                            <button

                                className="botonTema"

                                onClick={()=>reproducir(index)}

                            >


                                <span>

                                    ▶

                                </span>


                                {tema.titulo}



                            </button>






                           



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

                        onClick={()=>audioRef.current.play()}

                    >

                        ▶

                    </button>





                    <button

                        onClick={()=>audioRef.current.pause()}

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

     controlsList="nodownload"

    className="audioMusic"

    src={canciones[actual].url}

    onLoadedMetadata={(e)=>{

        if(canciones[actual].inicio){

            e.target.currentTime = Number(canciones[actual].inicio);

        }

    }}


    onTimeUpdate={(e)=>{


        const tiempoActual = e.target.currentTime;


        const final = Number(canciones[actual].fin);



        if(final && tiempoActual >= final){


            e.target.pause();


            e.target.currentTime = Number(canciones[actual].inicio) || 0;


        }


    }}


    onEnded={siguiente}

/>








                





            </div>




        </main>


    );


}