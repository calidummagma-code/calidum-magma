import "./SplashScreen.css";

import fondo from "../assets/landing.png";
import logo from "../assets/logo-calidum.png";

import { useNavigate } from "react-router-dom";
import botonEntrar from "../assets/boton-entrar.png";
console.log("Logo:", logo);
console.log("Botón:", botonEntrar);

export default function SplashScreen() {

  const navigate = useNavigate();

  const entrar = () => {
    navigate("/home");
  };

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      {/* Capa oscura */}
      <div className="overlay"></div>

      {/* Humo */}
      <div className="smoke"></div>

      {/* Logo */}
      <img
        src={logo}
        alt="Calidum Magma"
        className="logo"
      />

      {/* Botón */}
<img
  src={botonEntrar}
  alt="Entrar"
  className="enterButtonImage"
  onClick={entrar}
/>

    </div>
  );
}