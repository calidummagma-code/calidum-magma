import "./Bio.css";
import { useEffect } from "react";

export default function Bio() {

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

    }, []);

    return (

        <main className="biografiaPagina">

            <button
                className="cerrarBiografia"
                onClick={() => window.history.back()}
            >
                ✕
            </button>

            <div className="cabeceraBiografia">

                <span className="numero">
                    03
                </span>

                <h1>
                    BIOGRAFIA
                </h1>

            </div>

            <div className="textoBiografia">

                <p>

                    Lluny dels artificis i les produccions inflades de laboratori,
                    <strong> Calidum Magma </strong>
                    s'alimenta de la suor del rock de carrer, l'urgència del punk
                    urbà i l'electricitat nocturna de les sales independents.
                    En la seva proposta no hi ha espai per a l'estètica buida:
                    la nit es viu com un escenari de supervivència sobre l'asfalt,
                    amb l'aroma implacable del tequila, la carretera i els
                    amplificadors al límit.

                </p>

                <p>

                    La seva identitat artística es construeix a partir d'una
                    combinació de contundència musical i honestedat emocional.
                    Les lletres s'articulen en tres grans eixos.
                    D'una banda, una mirada crítica al ritme devorador de la vida
                    moderna i a la pressió constant d'una societat que exigeix
                    produir sense descans.
                    De l'altra, un costumisme afectiu que abraça la vulnerabilitat,
                    el desamor i la frustració sense embuts.
                    Finalment, una narrativa que fuig del positivisme tòxic per
                    parlar obertament del col·lapse mental, l'ansietat i les
                    contradiccions de la realitat contemporània.

                </p>

                <p>

                    Sobre l'escenari, la banda desplega un exercici implacable de
                    tensió i descàrrega.
                    Tradueixen el pànic en esclats de distorsió salvatge,
                    recolzats en una solvència tècnica impecable:
                    riffs corpulents, solos de guitarra carregats d'emoció,
                    una base rítmica sòlida i aturades estratègiques que
                    demostren un múscul instrumental de primer nivell.

                </p>

                <p>

                    Les seves composicions, plenes de cors multitudinaris,
                    estan concebudes perquè cada concert es converteixi en una
                    autèntica catarsi col·lectiva amb el puny enlaire.

                </p>

                <p>

                    El vincle amb el públic és directe i sincer.
                    Fugint de sermons morals i de qualsevol pedestal,
                    Calidum Magma entén el rock com un refugi compartit davant
                    les sacsejades de la vida.
                    Cada actuació és una invitació a cantar,
                    descarregar tensions i reconèixer-se en unes històries
                    que poden ser les de qualsevol.

                </p>

                <p>

                    És un projecte que aconsegueix equilibrar la força del punk,
                    la versatilitat tècnica del rock alternatiu,
                    la ràbia del hardcore i la sensibilitat de la cançó d'autor.

                    Una proposta que beu de la contundència social de bandes
                    com La Polla Records o Inadaptats,
                    però que també incorpora una mirada íntima,
                    urbana i contemporània, liderada per una veu femenina
                    capaç de combinar fragilitat i contundència
                    en una mateixa cançó.

                </p>

                <p>

                    Calidum Magma no pretén seguir modes ni recuperar la
                    nostàlgia d'altres èpoques.

                    La seva voluntat és demostrar que el rock continua sent
                    una eina viva per explicar el present,
                    qüestionar-lo i compartir-lo amb un públic que encara
                    necessita cançons que parlin sense filtres.

                </p>

            </div>

        </main>

    );

}