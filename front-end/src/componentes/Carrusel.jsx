import React, { useEffect, useState } from 'react';


// Importar imágenes desde src/img
const images = [
  {
    src: '/img/ondaserena.jpeg',
    alt: 'Cortinas Onda Serena',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/sheerelegance.jpeg',
    alt: 'Cortinas Sheer Elegance',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/blackout.jpeg',
    alt: 'Cortinas Blackout',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/cortinasmotorizadas.jpeg',
    alt: 'Cortinas Motorizadas',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/toldos.jpeg',
    alt: 'Toldos',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/panesjapones.jpeg',
    alt: 'Paneles Japoneses',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  },
  {
    src: '/img/cortinascomprenses.jpeg',
    alt: 'Cortinas Comprenses',
    fallbackSrc: '/img/placeholder-cortina.jpeg'
  }
];

// (tu componente Carrusel sigue igual, no cambia)


const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageError = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: false }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full md:w-4/5 max-w-4xl mx-auto h-64 md:h-80 overflow-hidden rounded-xl shadow-2xl bg-gray-100">
      {/* Carrusel */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map(({ src, alt, fallbackSrc }, index) => (
          <div key={index} className="min-w-full h-full flex items-center justify-center">
            {loadedImages[index] !== false ? (
              <img 
                src={src} 
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => handleImageError(index)}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))} 
              />
            ) : (
              <div className="relative w-full h-full">
                <img 
                  src={fallbackSrc} 
                  alt={`${alt} (alternativa)`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{alt}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E5BC57] hover:bg-yellow-500 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Imagen anterior"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botón siguiente */}
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E5BC57]  hover:bg-yellow-500  text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Imagen siguiente"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;