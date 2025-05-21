import React, { useEffect, useState } from 'react';

const images = [
  { src: './img/ondaserena.jpeg', alt: 'Categoría 1' },
  { src: './img/sheerelegance.jpeg', alt: 'Categoría 2' },
  { src: './img/blackout.jpeg', alt: 'Categoría 3' },
  { src: './img/cortinasmotorizadas.jpeg', alt: 'Categoría 4' },
  { src: './img/toldos.jpeg', alt: 'Categoría 5' },
  { src: './img/paneljapones.jpeg', alt: 'Categoría 6' },
  { src: './img/cortinasconprenses.jpeg', alt: 'Categoría 7' },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambiar indicador cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .carousel-container {
          width: 80%;
          height: 300px;
          overflow: hidden;
          position: relative;
          max-width: 900px;
          margin: auto;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        .carousel {
          display: flex;
          width: calc(100% * ${images.length});
          transform: translateX(-${activeIndex * (100 / images.length)}%);
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          flex: 0 0 ${100 / images.length}%;
        }
        .carousel-item img {
          width: 90%;
          height: 90%;
          display: block;
          object-fit: cover;
          margin: auto;
          border-radius: 5px;
        }
        .carousel-indicators {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
        }
        .dot {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          display: inline-block;
          background-color: #b9b1b1;
          border-radius: 50%;
          transition: background-color 0.6s ease;
          cursor: pointer;
        }
        .dot.active {
          background-color: #575555;
        }
      `}</style>

      <div className="carousel-container">
        <div className="carousel">
          {images.map(({ src, alt }, i) => (
            <div className="carousel-item" key={i}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;


