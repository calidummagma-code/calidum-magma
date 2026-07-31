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
import entradaConcierto from "../assets/entrada-concierto.png";
import Bolos from "../components/Bolos";
import Galeria from "../components/Galeria";



export default function Home() {


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



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

  <div className="navbarLeft">

    <img
      src={logo}
      alt="Calidum Magma"
      className="navbarLogo"
    />

    <nav
      className={
        menuOpen
          ? "menu menuActive"
          : "menu"
      }
    >

      <button onClick={()=>scrollToSection("inicio")}>INICI</button>
      <button onClick={()=>scrollToSection("banda")}>BANDA</button>
      <button onClick={()=>scrollToSection("discografia")}>DISCOGRAFIA</button>
      <button onClick={()=>scrollToSection("conciertos")}>BOLOS</button>
      <button onClick={()=>scrollToSection("galeria")}>GALERIA</button>
     
      <button onClick={()=>scrollToSection("contacte")}>CONTACTE</button>

    </nav>

  </div>

  <button
    className="menuButton"
    onClick={()=>setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

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







</main>


  );

}