import imgConfeccion from '../assets/img/Confeccion.png';
import imgInstalacion from '../assets/img/Instalacion.png';
import imgLavado from '../assets/img/Lavado.png';
import imgRestauracion from '../assets/img/Restauracion.png';

function Servicios() {
  const servicios = [
    {
      titulo: "Confección de Cortinas",
      descripcion: "Diseñamos cortinas a medida con materiales de alta calidad para transformar cualquier espacio.",
      imagen: imgConfeccion,
      icono: "✂️"
    },
    {
      titulo: "Instalación",
      descripcion: "Instalamos tus cortinas con precisión y eficiencia, garantizando un acabado profesional.",
      imagen: imgInstalacion,
      icono: "🔧"
    },
    {
      titulo: "Lavado y Mantenimiento",
      descripcion: "Servicio profesional de limpieza y mantenimiento especializado para prolongar la vida útil.",
      imagen: imgLavado,
      icono: "🧽"
    },
    {
      titulo: "Reparación y Restauración",
      descripcion: "Reparamos y renovamos cortinas para que luzcan como nuevas, dándoles una segunda vida.",
      imagen: imgRestauracion,
      icono: "🔨"
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-full mb-6 shadow-lg">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Nuestros Servicios
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales para cortinas con la más alta calidad y atención al detalle
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E5BC57] to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">{servicio.icono}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#E5BC57] transition-colors duration-300">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {servicio.descripcion}
                </p>
                
                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#E5BC57] to-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:from-yellow-400 hover:to-[#E5BC57] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  <span>Más información</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E5BC57] to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas una consulta personalizada?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nuestros expertos están listos para ayudarte a encontrar la solución perfecta para tu hogar
            </p>
            <button className="bg-white text-[#E5BC57] font-bold px-8 py-3 rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;