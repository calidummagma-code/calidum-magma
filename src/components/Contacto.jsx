import "./Contacto.css";

export default function Contacto() {

    return (

        <section
            id="contacte"
            className="contacto"
        >

            <h2 className="sectionTitle">
                CONTACTE
            </h2>

            <div className="contactoContenido">

                <div className="contactoFormulario">

                    <form className="formularioContacto">

                        <div className="columnaIzquierda">

                            <input
                                type="text"
                                name="nom"
                                placeholder="Nom"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Correu electrònic"
                            />

                            <input
                                type="text"
                                name="assumpte"
                                placeholder="Assumpte"
                            />

                        </div>

                        <div className="columnaDerecha">

                            <textarea
                                name="missatge"
                                placeholder="Escriu el teu missatge..."
                            ></textarea>

                            <button type="submit">
                                ENVIAR
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    );

}
