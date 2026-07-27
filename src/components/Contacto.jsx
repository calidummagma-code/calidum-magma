import "./Contacto.css";

import contacteBg from "../assets/contacte.png";


export default function Contacto() {

  return (

    <section
      id="contacto"
      className="contacto"
    >


      <h2 className="tituloContacto">
        CONTACTE
      </h2>



      <div className="contactoContenido">


        {/* FORMULARIO IZQUIERDA */}

        <div className="contactoDerecha">


          <form>


            <input
              type="text"
              placeholder="Nom"
            />


            <input
              type="email"
              placeholder="Correu electrònic"
            />


            <input
              type="text"
              placeholder="Assumpte"
            />


            <textarea
              rows="7"
              placeholder="Escriu el teu missatge..."
            ></textarea>


            <button type="submit">
              ENVIAR
            </button>


          </form>


        </div>



        {/* IMAGEN DERECHA */}

        <div className="contactoIzquierda">


          <img
            src={contacteBg}
            alt="Contacte"
            className="contactoImagen"
          />


        </div>



      </div>


    </section>

  );

}