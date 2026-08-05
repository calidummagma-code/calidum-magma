import { useRef, useState, useEffect } from "react";

import { supabase } from "../supabase/client";
import entradaConcierto from "../assets/entrada-concierto.png";

import "./Bolos.css";


export default function Bolos() {


    const carruselRef = useRef(null);


    const [conciertos, setConciertos] = useState([]);

    const [entradaSeleccionada, setEntradaSeleccionada] = useState(null);



    const hoy = new Date();

    hoy.setHours(0,0,0,0);



    // =========================
    // CARGAR CONCIERTOS SUPABASE
    // =========================

    useEffect(() => {


        async function cargarConciertos(){


            const { data, error } = await supabase

                .from("concerts")

                .select("*")

                .order("fecha", { ascending:true });



            if(error){

                console.error(
                    "Error cargando conciertos:",
                    error
                );

                return;

            }


            setConciertos(data || []);


        }


        cargarConciertos();


    },[]);





    // =========================
    // SEPARAR CONCIERTOS
    // =========================


    const futuros = conciertos

        .filter((concierto)=>{


            const fecha = new Date(concierto.fecha);

            fecha.setHours(0,0,0,0);


            return fecha >= hoy;


        })

        .sort(
            (a,b)=>new Date(a.fecha)-new Date(b.fecha)
        );



    const pasados = conciertos

        .filter((concierto)=>{


            const fecha = new Date(concierto.fecha);

            fecha.setHours(0,0,0,0);


            return fecha < hoy;


        })

        .sort(
            (a,b)=>new Date(b.fecha)-new Date(a.fecha)
        );





    const proximo = futuros[0];


    const proximos = futuros.slice(1);





    // =========================
    // FORMATO DATOS
    // =========================


    function mostrarHora(hora){


        if(!hora) return "";


        return `${hora} hores`;


    }



    function mostrarPrecio(precio){


        if(!precio) return "";


        if(!isNaN(precio)){


            return `${precio} €`;


        }


        return precio;


    }





    // =========================
    // CARRUSEL
    // =========================


    const moverIzquierda = ()=>{


        carruselRef.current?.scrollBy({

            left:-320,

            behavior:"smooth"

        });


    };



    const moverDerecha = ()=>{


        carruselRef.current?.scrollBy({

            left:320,

            behavior:"smooth"

        });


    };





    useEffect(()=>{


    const timer=setTimeout(()=>{


        if(!carruselRef.current) return;


        const carrusel = carruselRef.current;


        const destacado = 
            carrusel.querySelector(".destacado");


        if(!destacado) return;



        const posicion =

            destacado.offsetLeft
            -
            (carrusel.clientWidth / 2)
            +
            (destacado.clientWidth / 2);



        carrusel.scrollTo({

            left: posicion,

            behavior:"auto"

        });



    },300);



    return ()=>clearTimeout(timer);



},[conciertos]);





    function renderEntrada(concierto, pasada=false, destacado=false){


        if(!concierto) return null;



        return (

            <article

                key={concierto.id}

                className={
    pasada
    ?
    "entradaCard pasada"
    :
    destacado
    ?
    "entradaCard destacado"
    :
    "entradaCard"
}

                onClick={()=>setEntradaSeleccionada(concierto)}

            >


                <img

                    src={entradaConcierto}

                    alt={concierto.ciudad}

                    className="entradaImg"

                />



                <div className="entradaInfo">


                    <h3>

                        {concierto.ciudad}

                    </h3>



                    <p>

                        {concierto.fecha}

                    </p>



                    <p>

                        {concierto.sala}

                    </p>



                    <p>

                        {mostrarHora(concierto.hora)}

                    </p>



                    <p>

                        Entrada: {mostrarPrecio(concierto.precio)}

                    </p>



                </div>



                {pasada &&

                    <div className="selloFinalizado">

                        CONCERT REALITZAT

                    </div>

                }



            </article>

        );


    }







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




                   {proximos.map((concierto)=>(

    renderEntrada(concierto)

))}


{renderEntrada(proximo,false,true)}


{pasados.map((concierto)=>(

    renderEntrada(
        concierto,
        true
    )

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

                    onClick={()=>setEntradaSeleccionada(null)}

                >



                    <div

                        className="entradaGrande"

                        onClick={
                            (e)=>e.stopPropagation()
                        }

                    >



                        <button

                            className="cerrarVisor"

                            onClick={
                                ()=>setEntradaSeleccionada(null)
                            }

                        >

                            ✕

                        </button>




                        <img

                            src={entradaConcierto}

                            alt={entradaSeleccionada.ciudad}

                            className={
                                new Date(entradaSeleccionada.fecha)<hoy

                                ?

                                "entradaGrandeImg pasada"

                                :

                                "entradaGrandeImg"

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

                                {mostrarHora(
                                    entradaSeleccionada.hora
                                )}

                            </p>



                            <p>

                                Entrada: {mostrarPrecio(
                                    entradaSeleccionada.precio
                                )}

                            </p>



                        </div>





                        {

                        new Date(entradaSeleccionada.fecha)<hoy &&


                            <div className="selloGrande">

                                CONCERT REALITZAT

                            </div>

                        }



                    </div>



                </div>


            )}




        </section>


    );


}