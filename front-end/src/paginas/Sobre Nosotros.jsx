import imagenFondo from '../assets/img/fondo.png'; // asegúrate que el archivo se llame así y esté en esa ruta

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </section>
      {/* el resto de tu código está bien */}
    </div>
  );
}

export default SobreNosotros;
