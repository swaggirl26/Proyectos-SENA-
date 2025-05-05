import imagenFondo from '../assets/img/fondo.png'; 
import whatsapp from '../assets/img/whatsapp_icono 5.png';


function Inicio() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-xl italic mb-4">“ Calidad, estilo y cumplimiento a tu medida ”</h2>
        <p className="mb-6 max-w-md">
          Más de 32 años de experiencia, transformando tus espacios con elegancia, calidad y funcionalidad.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          Compra Ahora
        </button>
      </div>

      {/* Columna derecha */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={imagenFondo}
          alt="Fondo"
          className="w-full h-full object-cover object-right" // Cambia a object-left o object-center si lo prefieres
        />
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="absolute bottom-4 right-4 w-12 h-12 cursor-pointer"
        />
      </div>
    </section>
  );
}

export default Inicio;
