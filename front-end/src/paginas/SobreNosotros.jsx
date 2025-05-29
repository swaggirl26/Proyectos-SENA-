import imagenFondo from '../assets/img/Fondoportada.png';

function SobreNosotros() {
  return (
    <div className="bg-white text-black">
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center px-10"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <div className="text-white max-w-md z-10">
          <h2 className="text-3xl font-serif font-bold mb-4">SOBRE NOSOTROS</h2>
          <p className="text-sm leading-relaxed">
            Con más de 32 años de experiencia, ofrecemos un servicio integral en venta, mantenimiento y lavado de cortinas, con precios justos y calidad garantizada.
            Nos destacamos por nuestra atención personalizada, compromiso con la excelencia y procesos eficientes que aseguran la durabilidad de cada producto.
            En Cortinas, trabajamos con pasión para transformar tus espacios en ambientes más acogedores, funcionales y llenos de estilo. ¡Confía en nosotros para cuidar y embellecer tu hogar!
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </section>

      <section className="py-16 px-8 bg-[#e5e2df]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p className="text-sm text-gray-700">
              "Ser la empresa líder de Cali en fabricación, venta y mantenimiento de cortinas, reconocida por nuestra experiencia, calidad, 
              y compromiso en transformar espacios con soluciones innovadoras y funcionales 
              que superan las expectativas de nuestros clientes."
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p className="text-sm text-gray-700">
              "Brindar soluciones integrales en cortinas y servicios relacionados, 
              ofreciendo asesoría personalizada, productos de alta calidad, precios competitivos, puntualidad en la entrega,
              asegurando la satisfacción y fidelidad de nuestros clientes en la ciudad de Cali."
            </p>
          </div>
           <div>
            <h3 className="text-xl font-semibold mb-2">¿Por qué elegirnos?</h3>
            <p className="text-sm text-gray-700">
              Con más de 32 años de experiencia, somos especialistas en venta, 
              mantenimiento y lavado de cortinas. Nos destacamos por ofrecer calidad garantizada, 
              cumplimiento en los tiempos, atención personalizada y precios competitivos, 
              siempre asegurando resultados duraderos y a la medida de cada cliente.

            </p>
          </div>
          </div>
      </section>

      <section className="py-16 px-8 bg-[#e5e2df]">
        <h3 className="text-2xl font-bold text-center mb-8">Valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm text-black">
          <div><strong>Compromiso:</strong> Trabajamos con dedicación para cumplir y superar las expectativas de quienes confían en nuestros productos y servicios.</div>
          <div><strong>Seguridad:</strong> Garantizamos instalaciones seguras y materiales de calidad, protegiendo tanto los espacios como a quienes los habitan.</div>
          <div><strong>Innovación:</strong> Nos mantenemos actualizados en tendencias, técnicas y tecnologías para ofrecer soluciones modernas y funcionales.</div>
          <div><strong>Confidencialidad:</strong> Brindamos una atención cálida, respetuosa y cercana, generando una experiencia agradable desde el primer contacto.</div>
          <div><strong>Amabilidad:</strong> Brindamos una atención cálida, respetuosa y cercana, generando una experiencia agradable desde el primer contacto.</div>
          <div><strong>Transparencia:</strong> Mantenemos una comunicación clara y honesta con nuestros clientes, sin costos ocultos ni promesas falsas.</div>
          <div><strong>Respeto:</strong> Valoramos a cada persona, espacio y necesidad, promoviendo relaciones basadas en la cortesía y la consideración mutua.</div>
          <div><strong>Puntualidad:</strong> Cumplimos con los tiempos acordados en cada entrega, instalación y servicio, respetando el tiempo de nuestros clientes.</div>
          <div><strong>Responsabilidad:</strong> Asumimos con seriedad cada proyecto, garantizando resultados de calidad y atención constante a los detalles.</div>
        </div>
      </section>
    </div>
    

  );
}

export default SobreNosotros;
