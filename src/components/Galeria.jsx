import "./Galeria.css";

import { useEffect, useState } from "react";

import { supabase } from "../supabase/client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



export default function Galeria() {


    const [elementos, setElementos] = useState([]);

    const [activo, setActivo] = useState(null);

    const [cargando, setCargando] = useState(true);





    useEffect(() => {

        cargarGaleria();

    }, []);






    async function cargarGaleria(){


        const { data, error } = await supabase

            .from("galeria")

            .select("*")

            .order("orden", {

                ascending:true

            });




        if(error){

            console.log(error.message);

            setCargando(false);

            return;

        }




        setElementos(data || []);

        setCargando(false);



    }








    const cerrar = () => {

        setActivo(null);

    };








    const anterior = (e) => {


        e.stopPropagation();


        setActivo(

            activo === 0

            ?

            elementos.length - 1

            :

            activo - 1

        );


    };










    const siguiente = (e) => {


        e.stopPropagation();


        setActivo(

            activo === elementos.length - 1

            ?

            0

            :

            activo + 1

        );


    };








    if(cargando){

        return null;

    }








    return (



        <section

            id="galeria"

            className="galeria"

        >






            <h2 className="tituloGaleria">

                GALERIA

            </h2>








            <Swiper


                modules={[Navigation]}


                navigation={true}


                loop={true}


                spaceBetween={25}


                slidesPerView={3}


                breakpoints={{


                    0:{


                        slidesPerView:1,


                    },


                    768:{


                        slidesPerView:2,


                    },


                    1200:{


                        slidesPerView:3,


                    },


                }}



            >








                {elementos.map((item,index)=>(



                    <SwiperSlide

                        key={item.id}

                    >




                        <div

                            className="elementoGaleria"

                            onClick={()=>setActivo(index)}

                        >




                            {item.tipo === "foto" ? (

    <img
        src={item.url}
        alt={item.titulo}
        className="fotoGaleria"
    />

) : (

    <div className="videoMiniatura">

        <video
            src={item.url}
            className="videoGaleria"
            muted
            preload="metadata"
        />

        <div className="playVideo">
            ▶
        </div>

        <div className="tituloVideo">
            {item.titulo}
        </div>

    </div>

)}




                        </div>





                    </SwiperSlide>



                ))}








            </Swiper>









            {activo !== null && (



                <div

                    className="lightbox"

                    onClick={cerrar}

                >






                    <button

                        className="cerrarLightbox"

                        onClick={cerrar}

                    >

                        ✕

                    </button>









                    <button

                        className="flecha izquierda"

                        onClick={anterior}

                    >

                        ‹

                    </button>








{elementos[activo].tipo === "foto" ? (

    <img
        src={elementos[activo].url}
        alt={elementos[activo].titulo}
        className="fotoGrande"
        onClick={(e)=>e.stopPropagation()}
    />

) : (

    <video
        className="videoGrande"
        controls
        autoPlay
        onClick={(e)=>e.stopPropagation()}
    >
        <source
            src={elementos[activo].url}
            type="video/mp4"
        />
    </video>

)}







                    <button

                        className="flecha derecha"

                        onClick={siguiente}

                    >

                        ›

                    </button>







                </div>



            )}







        </section>



    );


}