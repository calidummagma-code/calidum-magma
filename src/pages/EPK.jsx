import "./EPK.css";

import logo from "../assets/logo-calidum.png";
import portada from "../assets/epk/portada-epk.png";
import hebdomana from "../assets/epk/hebdomana.jpg";



export default function EPK(){

    return (

        <main className="epk">


            {/* =========================
                PORTADA
            ========================== */}

            <section className="hero">


                <img
                    src={portada}
                    alt="Calidum Magma"
                    className="epkFondo"
                />



                <div className="epkHeroContent">


                    <img
                        src={logo}
                        alt="Calidum Magma"
                        className="epkLogo"
                    />



                    <h1 className="epkTitulo">

                        CALIDUM MAGMA

                    </h1>



                    <h2 className="epkFrase">

                        EL ROCK CONTINUA
                        <br />
                        TENINT COSES A DIR.

                    </h2>



                    <p className="epkSubtitulo">

                        Rock d'autor · Tarragona · Des de 2024

                    </p>


                </div>


            </section>






            {/* =========================
    QUI SOM
========================== */}


<section className="quiSom">


    <div>


        <span className="numero">

            01

        </span>



        <h2>

            QUI SOM?

        </h2>



        <p>

            <strong>Calidum Magma</strong> neix a Tarragona amb una idea molt clara:
            fer rock sense disfresses.

            <br /><br />

            Les seves cançons combinen la força del rock català amb influències
            del punk i del hard rock, construint un repertori propi basat en
            l'energia, la sinceritat i la connexió directa amb el públic.

            <br /><br />

            Cada concert és una experiència directa, intensa i honesta.

        </p>



        <a
            href="/banda"
            className="veureMes"
        >

            Veure més →

        </a>


    </div>





    <div className="cita">


        <span className="cometes">

            "

        </span>



        <p>

            Calidum Magma no busca mirar enrere.

            <br /><br />

            Vol demostrar que el rock continua tenint coses a dir.

        </p>


    </div>


</section>




            {/* =========================
                BIOGRAFIA
            ========================== */}


            <section className="biografia">


                <div className="biografiaContenido">


                    <span className="numero">

                        02

                    </span>



                    <h2>

                        BIOGRAFIA

                    </h2>



                    <p>

                        Calidum Magma neix a Tarragona l'any 2024 amb la voluntat
                        de crear un projecte de rock amb identitat pròpia.

                        <br /><br />

                        La banda recupera l'esperit del rock de sempre i el combina
                        amb influències actuals, mantenint una actitud directa i sense
                        artificis.

                        <br /><br />

                        Amb cançons pròpies i un so contundent, Calidum Magma defensa
                        una manera d'entendre la música basada en l'energia, el missatge
                        i el contacte amb el públic.

                    </p>



                    <div className="fraseBiografia">

                        EL ROCK CONTINUA
                        <br />
                        TENINT COSES A DIR.

                    </div>


                </div>

<a
    href="/biografia"
    className="veureMes"
>
    VEURE MÉS →
</a>
            </section>






            {/* =========================
                EL DIRECTE
            ========================== */}


            <section className="directe">


                <div>


                    <span className="numero">

                        03

                    </span>



                    <h2>

                        EL DIRECTE

                    </h2>



                    <p>

                        Intens. Honest. Sense concessions.

                        <br /><br />

                        Calidum Magma converteix cada concert en una experiència
                        compartida amb el públic.

                        <br /><br />

                        Un directe enèrgic, contundent i basat en la força
                        de les cançons pròpies.

                    </p>


                </div>





                <div className="directeDades">


                    <div className="dada">

                        <strong>
                            2024
                        </strong>

                        <span>
                            ANY FUNDACIÓ
                        </span>

                    </div>




                    <div className="dada">

                        <strong>
                            10+
                        </strong>

                        <span>
                            CONCERTS
                        </span>

                    </div>




                    <div className="dada">

                        <strong>
                            60'
                        </strong>

                        <span>
                            DURADA SHOW
                        </span>

                    </div>




                    <div className="dada">

                        <strong>
                            100%
                        </strong>

                        <span>
                            CANÇONS PRÒPIES
                        </span>

                    </div>


                </div>


            </section>

                        {/* =========================
                MUSICA
            ========================== */}


            <section className="musica">


               <div className="musicaTexto">

    <span className="numero">

        04

    </span>

    <h2>

        MÚSICA

    </h2>

    <p>

        El primer treball discogràfic de Calidum Magma
        recull l'essència del projecte:

        <br /><br />

        Rock directe, actitud i cançons pròpies.

    </p>

    <a
        href="/music"
        className="veureMes"
    >
        VEURE MÉS →
    </a>

</div>





                <div className="discPrincipal">


                    <img
                        src={hebdomana}
                        alt="Hebdomana Dimidia Vol.001"
                        className="portadaDisc"
                    />



                    <div className="discInfo">

    <h3>

        HEBDÒMANA DIMÍDIA
        <br />
        VOL.001

    </h3>

    <p>

        El primer EP de Calidum Magma.

        Quatre cançons originals que defineixen
        la identitat sonora de la banda:
        rock d'autor, energia i actitud.

    </p>

  

</div>


                </div>


            </section>







            {/* =========================
                PREMSA
            ========================== */}


            <section className="premsa">


                <div className="premsaContenido">


                    <span className="numero">

                        05

                    </span>



                    <h2>

                        PREMSA

                    </h2>



                    <p>

                        Espai destinat a aparicions en mitjans,
                        entrevistes, ressenyes i mencions
                        relacionades amb Calidum Magma.

                        <br /><br />

                        Aquí incorporarem les valoracions i
                        continguts destacats de premsa.

                    </p>



                    <div className="frasesPremsa">


                        <div className="citaPremsa">

                            "El rock continua tenint coses a dir."

                        </div>



                        <div className="citaPremsa">

                            "Una proposta amb energia i identitat pròpia."

                        </div>



                        <div className="citaPremsa">

                            "Rock directe, honest i sense artificis."

                        </div>


                    </div>


                </div>


            </section>







            {/* =========================
    FITXA TÈCNICA / RIDER
========================== */}

<section className="rider">

    <div className="riderContenido">

        <span className="numero">

            06

        </span>

        <h2>

            FITXA TÈCNICA / RIDER

        </h2>

        <p>

            Informació orientada a sales, festivals
            i promotors.

            <br /><br />

            El format del directe s'adapta a diferents
            espais mantenint sempre la intensitat
            del projecte.

        </p>

        

        <div className="riderDatos">


    <div className="riderBloque">

        <h3>

            FORMAT

        </h3>

        <p>

            Banda de rock
            <br />
            Directe propi
            <br />
            So contundent

        </p>

    </div>



    <div className="riderBloque">

        <h3>

            DURADA

        </h3>

        <p>

            60 minuts aproximadament

        </p>

    </div>



    <div className="riderBloque">

        <h3>

            FORMACIÓ

        </h3>

        <p>

            Veu
            <br />
            Guitarra
            <br />
            Baix
            <br />
            Bateria

        </p>

    </div>



    <div className="riderBloque">

        <h3>

            NECESSITATS

        </h3>

        <p>

            Escenari adequat
            <br />
            Sistema de so professional
            <br />
            Prova de so

        </p>

    </div>


</div>



<a
    href="/pdf/Rider-Calidum-Magma.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="veureMes"
>

    VEURE MÉS →

</a>


    </div>

</section>
            {/* =========================
                DATOS DE LA BANDA
            ========================== */}


            <section className="datosBanda">


                <div>


                    <span className="numero">

                        07

                    </span>



                    <h2>

                        DATOS DE LA BANDA

                    </h2>



                    <p>

    <strong>
        Nom:
    </strong>
    {" "}
    Calidum Magma

    <br /><br />


    <strong>
        Estil:
    </strong>
    {" "}
    Rock d'autor

    <br /><br />


    <strong>
        Procedència:
    </strong>
    {" "}
    Tarragona

    <br /><br />


    <strong>
        Any de formació:
    </strong>
    {" "}
    2024

    <br /><br />


    <strong>
        Repertori:
    </strong>
    {" "}
    100% cançons pròpies

</p>


                </div>


            </section>








           {/* =========================
    CONTACTE I XARXES
========================== */}


<section className="contacteEpk">


    <div>


        <span className="numero">

            08

        </span>



        <h2>

            CONTACTE I XARXES

        </h2>



        <p>

            Contractació i informació:

            <br /><br />

            Calidum Magma

            <br />

            Tarragona

            <br /><br />

            Instagram:
            @calidum_magma

            <br />
           

            YouTube: @CalidumMagma

            <br />

            Web: 

            <br />

            mail: calidummagma@gmail.com

        </p>


    </div>


</section>




        </main>


    );


}