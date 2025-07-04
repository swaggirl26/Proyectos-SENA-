import imagenFondo from '../assets/img/Fondoportada.png';

function SobreNosotros() {
  const valores = [
    { 
      nombre: "Compromiso", 
      descripcion: "Trabajamos con dedicación para cumplir y superar las expectativas de quienes confían en nuestros productos y servicios.",
      icono: "🤝"
    },
    { 
      nombre: "Seguridad", 
      descripcion: "Garantizamos instalaciones seguras y materiales de calidad, protegiendo tanto los espacios como a quienes los habitan.",
      icono: "🛡️"
    },
    { 
      nombre: "Innovación", 
      descripcion: "Nos mantenemos actualizados en tendencias, técnicas y tecnologías para ofrecer soluciones modernas y funcionales.",
      icono: "💡"
    },
    { 
      nombre: "Confidencialidad", 
      descripcion: "Protegemos la privacidad y confianza de nuestros clientes en cada proyecto que realizamos.",
      icono: "🔒"
    },
    { 
      nombre: "Amabilidad", 
      descripcion: "Brindamos una atención cálida, respetuosa y cercana, generando una experiencia agradable desde el primer contacto.",
      icono: "😊"
    },
    { 
      nombre: "Transparencia", 
      descripcion: "Mantenemos una comunicación clara y honesta con nuestros clientes, sin costos ocultos ni promesas falsas.",
      icono: "🔍"
    },
    { 
      nombre: "Respeto", 
      descripcion: "Valoramos a cada persona, espacio y necesidad, promoviendo relaciones basadas en la cortesía y la consideración mutua.",
      icono: "🙏"
    },
    { 
      nombre: "Puntualidad", 
      descripcion: "Cumplimos con los tiempos acordados en cada entrega, instalación y servicio, respetando el tiempo de nuestros clientes.",
      icono: "⏰"
    },
    { 
      nombre: "Responsabilidad", 
      descripcion: "Asumimos con seriedad cada proyecto, garantizando resultados de calidad y atención constante a los detalles.",
      icono: "✅"
    }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center px-10 overflow-hidden"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 border-2 border-white/30 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-[#E5BC57]/90 backdrop-blur-sm rounded-full text-black font-semibold mb-6 shadow-lg">
            <span className="mr-2">⭐</span>
            32 años de experiencia
          </div>

          <h2 className="text-4xl font-serif font-bold mb-6 text-white leading-tight">
            SOBRE 
            <span className="block text-[#E5BC57]">NOSOTROS</span>
          </h2>
          
          <div className="w-24 h-1 bg-[#E5BC57] mb-6 rounded-full"></div>
          
          <p className="text-lg leading-relaxed text-white/90 font-light">
            Con más de <span className="font-semibold text-[#E5BC57]">32 años de experiencia</span>, ofrecemos un servicio integral en venta, mantenimiento y lavado de cortinas, con precios justos y calidad garantizada.
          </p>
          <p className="text-lg leading-relaxed text-white/90 font-light mt-4">
            Nos destacamos por nuestra atención personalizada, compromiso con la excelencia y procesos eficientes que aseguran la durabilidad de cada producto.
          </p>
          <p className="text-lg leading-relaxed text-white/90 font-light mt-4">
            En <span className="font-semibold text-[#E5BC57]">Cortinas</span>, trabajamos con pasión para transformar tus espacios en ambientes más acogedores, funcionales y llenos de estilo. ¡Confía en nosotros para cuidar y embellecer tu hogar!
          </p>

          <button className="mt-8 bg-[#E5BC57] hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
            Conoce más sobre nosotros
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Mission, Vision, Why Choose Us Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#e5e2df] to-[#f0ede8] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E5BC57]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Esencia</h3>
            <div className="w-24 h-1 bg-[#E5BC57] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Visión</h4>
              <p className="text-gray-600 leading-relaxed">
                "Ser la empresa líder de Cali en fabricación, venta y mantenimiento de cortinas, reconocida por nuestra experiencia, calidad, 
                y compromiso en transformar espacios con soluciones innovadoras y funcionales 
                que superan las expectativas de nuestros clientes."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Misión</h4>
              <p className="text-gray-600 leading-relaxed">
                "Brindar soluciones integrales en cortinas y servicios relacionados, 
                ofreciendo asesoría personalizada, productos de alta calidad, precios competitivos, puntualidad en la entrega,
                asegurando la satisfacción y fidelidad de nuestros clientes en la ciudad de Cali."
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E5BC57] to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">¿Por qué elegirnos?</h4>
              <p className="text-gray-600 leading-relaxed">
                Con más de 32 años de experiencia, somos especialistas en venta, 
                mantenimiento y lavado de cortinas. Nos destacamos por ofrecer calidad garantizada, 
                cumplimiento en los tiempos, atención personalizada y precios competitivos, 
                siempre asegurando resultados duraderos y a la medida de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #E5BC57 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #E5BC57 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Valores</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los principios que guían cada decisión y acción en nuestra empresa, 
              asegurando un servicio excepcional y relaciones duraderas con nuestros clientes.
            </p>
            <div className="w-24 h-1 bg-[#E5BC57] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-[#E5BC57]/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{valor.icono}</span>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#E5BC57] transition-colors duration-300">
                  {valor.nombre}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {valor.descripcion}
                </p>

                {/* Decorative Border */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#E5BC57] to-yellow-400 rounded-3xl p-10 shadow-xl">
              <h4 className="text-3xl font-bold text-white mb-4">
                ¿Listo para transformar tu espacio?
              </h4>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Déjanos ayudarte a crear el ambiente perfecto con nuestras soluciones personalizadas en cortinas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#E5BC57] font-bold px-4 py-4 rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  <span>📞</span>
                  Solicitar Cotización
                </button>
                <button className="border-2 border-white text-white font-bold px-4 py-4 rounded-full hover:bg-white hover:text-[#E5BC57] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>💬</span>
                  Chatear con Nosotros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;