import Fondoportada from '../assets/img/Fondoportada.png';
import whatsappIcono from '/Iconos/whatsapp_icono.ico';
import Carrusel from '../componentes/Carrusel';
import Logo from '../assets/img/Logonav.png';
import testimonio from '../assets/img/testimonio.png';


function Inicio() {
  return (
    <>
      {/* Sección de portada */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-start"
        style={{ backgroundImage: `url(${Fondoportada})` }}
      >
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
          </button>
        
          <a
            href="https://wa.me/573137442462"
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
            <div className="bg-white shadow-xl relative transform transition duration-300 hover:scale-105">
              <img
                src="/imagenes/servicios.jpg"
                alt="Asesoría"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55 hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl font-bold mb-2">ASESORÍA</h2>
                <p>Te ayudamos a escoger la mejor opción para tu hogar</p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white shadow-xl relative transform transition duration-300 hover:scale-105">
              <img
                src="/imagenes/cortinas.jpg"
                alt="Productos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55 hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl font-bold mb-2">CORTINAS</h2>
                <p className="text-sm leading-tight">
                  Onda Serena - Sheer Elegance - Panel Japones - Enrollables -
                  Blackouts - Verticales - Macromadera - Motorizadas - Toldos
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white shadow-xl relative transform transition duration-300 hover:scale-105">
              <img
                src="/imagenes/asesoria.jpg"
                alt="Servicios"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55 hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center text-white text-center px-4">
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
         {/* Carrusel de productos */}
      <section className="py-5 bg-[#e5e2df]">
        <div className="container mx-auto px-4">
          <Carrusel />
        </div>
      </section>
        {/* Testimonio */}
      <section className="bg-[#d8c1a7] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Logo + texto */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
          <img src={Logo} alt="Logo" className="w-100 md:w-100 mb-2" />
         </div>

        {/* Testimonio texto */}
        <div className="text-center md:text-left w-full md:w-2/4">
          <h3 className="text-xl font-semibold mb-4">Lo que opinan nuestros clientes</h3>
          <p className="text-lg font-serif mb-4">
            “Estoy encantado con mi nueva cortina. La calidad de la tela, el diseño y los acabados. ¡Definitivamente los recomiendo!”
          </p>
          <p className="mb-4 text-sm text-gray-800">¿Necesitas ayuda?</p>
          <button className="bg-[#E5BC57] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:brightness-110 transition">
            Contáctanos
          </button>
        </div>

        {/* Imagen + estrellas */}
<div className="w-full md:w-1/4 flex flex-col items-center">
  <img 
    src={testimonio} 
    alt="Cliente con cortina" 
    className="rounded-md shadow-md w-full object-cover" 
  />
  <div className="flex mt-3 bg-[#E5BC57] p-2 rounded-full">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-white text-1xl">★</span>
    ))}
  </div>
</div>

      </section>
    </>
  );
}

export default Inicio;