import "./Reproductor.css";

export default function Reproductor() {

    return (

        <div className="reproductor">

            

            <audio controls>

                <source
                    src="/music/13-ROSAS.mp3"
                    type="audio/mpeg"
                />

                Tu navegador no soporta este reproductor de audio.

            </audio>


        </div>

    );

}