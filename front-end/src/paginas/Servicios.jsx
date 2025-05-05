import imgCortinas from '../assets/img/Confeccion de cortinas.png';
import imgInstalacion from '../assets/img/Instalacion.png';
import imgLavado from '../assets/img/Lavado y mantenimiento.png';
import imgReparacion from '../assets/img/Reparacion y restauracion.png';



function Servicios() {
  const servicios = [
    {
      titulo: "Confección de Cortinas",
      descripcion: "Diseñamos cortinas a medida con materiales de alta calidad.",
      imagen: imgCortinas    
    },
    {
      titulo: "Instalación",
      descripcion: "Instalamos tus cortinas con precisión y eficiencia.",
      imagen: imgInstalacion
    },
    {
      titulo: "Lavado y Mantenimiento",
      descripcion: "Servicio profesional de limpieza y mantenimiento especializado.",
      imagen: imgLavado
    },
    {
      titulo: "Reparación y Restauración",
      descripcion: "Reparamos y renovamos cortinas para que luzcan como nuevas.",
      imagen: imgReparacion
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Servicios</h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="w-full h-120 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">{servicio.titulo}</h3>
            <p className="text-gray-600 mb-6">{servicio.descripcion}</p>
            <button className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
              Más información
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
