import Fondoportada from '../assets/img/Fondoportada.png';
import whatsappIcono from '/Iconos/whatsapp_icono.ico';

function Inicio() {
  return (
    <>
      {/* Sección de portada */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-start"
        style={{ backgroundImage: `url(${Fondoportada})` }}
      >
        {/* Capa oscura encima de la imagen */}


        {/* Contenido encima de la imagen */}
        <div className="relative z-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
          <h2 className="text-xl italic mb-4">
            “ Calidad, estilo y cumplimiento a tu medida ”
          </h2>
          <p className="mb-6 max-w-md">
            Más de 32 años de experiencia, transformando tus espacios con
            elegancia, calidad y funcionalidad.
          </p>
          <button className="bg-[#E5BC57] text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            Compra Ahora
          </button >
        
          <a
            href="https://wa.me/573137442462" // reemplaza con tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="absolute fixed bottom-4 right-4"
          >
            <img
              src={whatsappIcono}
              alt="WhatsApp"
              className="w-[60px] h-[60px] hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </section>


      {/* Sección de tarjetas */}
      <section className="bg-[#e5e2df] py-16 px-4 text-center p-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
           <div className="bg-white shadow-xl relative">
  <img
    src="/imagenes/servicios.jpg"
    alt="Asesoría"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white text-center px-4">
    <h2 className="text-xl font-bold mb-2">ASESORÍA</h2>
    <p>Te ayudamos a escoger la mejor opción para tu hogar</p>
  </div>
</div>


            {/* Tarjeta 2 */}
             <div className="bg-white shadow-xl relative">
             <img
              src="/imagenes/cortinas.jpg"
              alt="Asesoría"
              className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl font-bold mb-2">CORTINAS</h2>
                <p className="text-sm leading-tight">
                  Onda Serena - Sheer Elegance - Panel Japones - Enrollables -
                  Blackouts - Verticales - Macromadera - Motorizadas - Toldos
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
             <div className="bg-white shadow-xl relative">
             <img
              src="/imagenes/asesoria.jpg"
              alt="Asesoría"
              className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl font-bold mb-2">SERVICIOS</h2>
                <p className="text-sm leading-tight">
                  Confección de cortinas - Instalación - Lavado y Mantenimiento
                  - Reparación Y Restauración
                </p>
              </div>
            </div>
          </div>

          {/* Texto inferior + botón */}
          <div className="mt-16">
            <h3 className="text-xl mb-4">Algunos de nuestros productos</h3>
            <button className="bg-[#E5BC57] text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition">
              TIENDA
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
