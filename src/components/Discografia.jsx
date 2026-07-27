import directe from "../assets/discografia/calidum-magma-directe.jpg";
import hebdomana from "../assets/discografia/hebdomana-dimidia-vol-001.jpg";

import "./Discografia.css";




function Discografia() {


  return (


    <section
      className="discografia"
      id="discografia"
    >



      {/* ===========================
          CABECERA
      ============================ */}


      <div className="discografiaHeader">



        <div className="tituloBloque">


          <h2 className="sectionTitle">

            DISCOGRAFÍA

          </h2>



          <p className="sectionSubtitle">

            Com sonem

          </p>


        </div>





        


      </div>






      {/* ===========================
          DISCOS
      ============================ */}



      <div className="discografiaGrid">






        {/* ===========================
            DISCO 1
        ============================ */}



        <article className="discoCard">



          <div className="discoCover">



            <img
              src={directe}
              alt="Calidum Magma Directe"
            />





            <div className="discoOverlay">



              <h3>
                CALIDUM MAGMA DIRECTE
              </h3>



              <p>
                Any: 2024
              </p>



              <p>
                Cançons: 7
              </p>





              <div className="linksMusica">



                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>



                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>



                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Music
                </a>



              </div>



            </div>





            <h3 className="tituloNormal">

              CALIDUM MAGMA DIRECTE

            </h3>




          </div>



        </article>









        {/* ===========================
            DISCO 2
        ============================ */}



        <article className="discoCard">



          <div className="discoCover">



            <img
              src={hebdomana}
              alt="Hebdomana Dimidia Vol.001"
            />





            <div className="discoOverlay">



              <h3>
                HEBDOMANA DIMIDIA VOL.001
              </h3>



              <p>
                Any: 2026
              </p>



              <p>
                Cançons: 4
              </p>





              <div className="linksMusica">



                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>




                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>




                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Music
                </a>



              </div>



            </div>






            <h3 className="tituloNormal">

              HEBDOMANA DIMIDIA VOL.001

            </h3>





          </div>




        </article>





      </div>




    </section>


  );


}



export default Discografia;