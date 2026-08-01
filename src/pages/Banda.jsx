import "./Banda.css";

import personajes from "../assets/personajes-epk.jpg";


export default function Banda(){


    const miembros = [


        {
            nombre:"DAVID",
            instrumento:"Baix i coros",
            texto:"Baixista i motor rítmic de la banda."
        },


        {
            nombre:"PILI",
            instrumento:"Veu i coros",
            texto:"Veu, cervell i essència melòdica del projecte."
        },


        {
            nombre:"SHIVA",
            instrumento:"Guitarra i coros",
            texto:"L'artesà de la Guitarra de Calidum Magma."
        },


        {
            nombre:"SURFERCALAVERA",
            instrumento:"Bateria",
            texto:"L'Energia i la potència darrere dels ritmes."
        }


    ];



    return(


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



                <img
                    src={personajes}
                    alt="Calidum Magma"
                />





                {
                    miembros.map((m,index)=>(



                        <div

                            key={index}

                            className={`zona zona${index+1}`}

                        >




                            <div className="fichaBanda">



                                <h3>

                                    {m.nombre}

                                </h3>




                                <strong>

                                    {m.instrumento}

                                </strong>




                                <p>

                                    {m.texto}

                                </p>




                            </div>



                        </div>



                    ))
                }





            </div>




        </main>


    )


}