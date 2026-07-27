import "./Galeria.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { elementos } from "./GaleriaData";

export default function Galeria() {

  const [activo, setActivo] = useState(null);

  const cerrar = () => {
    setActivo(null);
  };

  const anterior = (e) => {
    e.stopPropagation();

    setActivo(
      activo === 0
        ? elementos.length - 1
        : activo - 1
    );
  };

  const siguiente = (e) => {
    e.stopPropagation();

    setActivo(
      activo === elementos.length - 1
        ? 0
        : activo + 1
    );
  };

  return (

    <section
      id="galeria"
      className="galeria"
    >

      <h2 className="tituloGaleria">
        GALERIA
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >

        {elementos.map((item, index) => (

          <SwiperSlide key={index}>

            <div
              className="elementoGaleria"
              onClick={() => setActivo(index)}
            >

              {item.tipo === "foto" ? (

                <img
                  src={item.src}
                  alt={item.titulo}
                  className="fotoGaleria"
                />

              ) : (

                <div className="videoMiniatura">

                  <video
                    src={item.src}
                    className="videoGaleria"
                    muted
                    preload="metadata"
                  />

                  <div className="playVideo">
                    ▶
                  </div>

                  <div className="tituloVideo">
                    {item.titulo}
                  </div>

                </div>

              )}

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {activo !== null && (

        <div
          className="lightbox"
          onClick={cerrar}
        >

          <button
            className="cerrarLightbox"
            onClick={cerrar}
          >
            ✕
          </button>

          <button
            className="flecha izquierda"
            onClick={anterior}
          >
            ‹
          </button>

          {elementos[activo].tipo === "foto" ? (

            <img
              src={elementos[activo].src}
              alt={elementos[activo].titulo}
              className="fotoGrande"
              onClick={(e) => e.stopPropagation()}
            />

          ) : (

            <video
              className="videoGrande"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source
                src={elementos[activo].src}
                type="video/mp4"
              />
            </video>

          )}

          <button
            className="flecha derecha"
            onClick={siguiente}
          >
            ›
          </button>

        </div>

      )}

    </section>

  );

}