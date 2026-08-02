import "./Home.css";

import { useState, useEffect } from "react";

import fotoBanda from "../assets/home-bg.jpg";
import logo from "../assets/logo-calidum.png";
import miembro1 from "../assets/miembro1.jpg";
import miembro2 from "../assets/miembro2.jpg";
import miembro3 from "../assets/miembro3.jpg";
import miembro4 from "../assets/miembro4.jpg";
import Contacto from "../components/Contacto";
import Discografia from "../components/Discografia";
import Reproductor from "../components/Reproductor";

import Bolos from "../components/Bolos";
import Galeria from "../components/Galeria";
import videoLogo from "../assets/videos/Video-logo-web.mp4";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";



export default function Home() {


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mostrarFondo, setMostrarFondo] = useState(false);



  useEffect(()=>{


    const handleScroll = ()=>{

      setScrolled(window.scrollY > 50);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


   return ()=>{

    window.removeEventListener(
        "scroll",
        handleScroll
    );

};

  },[]);






 const scrollToSection = (id)=>{

    const section = document.getElementById(id);

    if(section){

        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

    setMenuOpen(false);

};







  return (

    <main className="home">



{/* =================================
    PORTADA
================================= */}



<section

id="inicio"

className="hero"

style={{

backgroundImage:`url(${fotoBanda})`

}}

>


<div className="heroOverlay"></div>





<header className={scrolled ? "navbar navbarScrolled" : "navbar"}>

    <img
        src={logo}
        alt="Calidum Magma"
        className="navbarLogo"
        onClick={() => setMostrarFondo(true)}
    />

    <button
        className={`hamburguesa ${menuOpen ? "abierta" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
    >
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav className={`menuLateral ${menuOpen ? "menuVisible" : ""}`}>

        <button onClick={() => scrollToSection("inicio")}>INICI</button>
        <button onClick={() => scrollToSection("banda")}>BANDA</button>
        <button onClick={() => scrollToSection("discografia")}>DISCOGRAFIA</button>
        <button onClick={() => scrollToSection("conciertos")}>BOLOS</button>
        <button onClick={() => scrollToSection("galeria")}>GALERIA</button>
        <button onClick={() => scrollToSection("contacte")}>CONTACTE</button>
<button
    onClick={() => {

        const clave = prompt(
            "Contingut exclusiu per a contractació i premsa.\n\nIntrodueix la clau d'accés:"
        );

        if (clave && clave.toLowerCase() === "cm") {

            navigate("/epk");

        } else if (clave !== null) {

            alert("Clau incorrecta.");

        }

        setMenuOpen(false);

    }}
>
    EPK
</button>




        <div className="socialMenuLateral">

            <a
                href="https://www.instagram.com/calidum_magma/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram}/>
            </a>

            <a
                href="https://www.youtube.com/@CalidumMagma"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube}/>
            </a>

        </div>

    </nav>

</header>





<div className="heroContent">

<h1>

CALIDUM MAGMA

</h1>





<p>

EXTREM ROCK DES DE TARRAGONA

</p>

<div className="playerInicio">

    <Reproductor />

</div>


<button

className="scrollIndicator"

onClick={()=>scrollToSection("banda")}

>

↓

</button>

<p className="heroFirma">
    Rock d'autor · Tarragona · Des de 2024
</p>

</div>




</section>







{/* =================================
    LA BANDA
================================= */}



<section

id="banda"

className="about"

>



<h2 className="sectionTitle">

LA BANDA

</h2>









<div className="membersGrid">






<article className="memberCard">

  <div className="memberImage">

    <img
      src={miembro1}
      alt="Pili Andreu"
    />

  </div>

  <div className="memberInfo">

    <h3>PILI ANDREU</h3>

    <span>VOCALISTA</span>

    <p>
      Artista multidisciplinària,
      cantant i compositora.
    </p>

  </div>

</article>








<article className="memberCard">

  <div className="memberImage">

    <img
      src={miembro2}
      alt="David"
    />

  </div>

  <div className="memberInfo">

    <h3>DAVID</h3>

    <span>BAIXISTA</span>

    <p>
      El mestre del Baix.
    </p>

  </div>

</article>









<article className="memberCard">

  <div className="memberImage">

    <img
      src={miembro3}
      alt="Fer"
    />

  </div>

  <div className="memberInfo">

    <h3>FER</h3>

    <span>BATERIA</span>

    <p>
      Surfercalavera.
    </p>

  </div>

</article>









<article className="memberCard">

  <div className="memberImage">

    <img
      src={miembro4}
      alt="Shiva"
    />

  </div>

  <div className="memberInfo">

    <h3>JOE LOVE SHIVA</h3>

    <span>GUITARRA</span>

    <p>
      L'artesà de la guitarra.
    </p>

  </div>

</article>





</div>





</section>









{/* =================================
    SECCIONS FUTURES
================================= */}





<Discografia />








<Bolos />






<Galeria />












<Contacto />


{mostrarFondo && (

    <div className="fondoEspecial">

        <video
    src={videoLogo}
    autoPlay
    playsInline
    controls
/>

        <button
            className="cerrarFondo"
            onClick={() => setMostrarFondo(false)}
        >
            ✕
        </button>

    </div>

)}



</main>


  );

}
