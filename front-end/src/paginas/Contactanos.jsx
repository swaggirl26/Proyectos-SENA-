import correoicono from "../assets/img/correoicono.ico";

function Contactanos() {
  return (
    <div className="min-h-screen bg-[#e5e2df] flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Lado izquierdo */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">¡Contáctanos!</h2>
          <p className="text-lg leading-relaxed">
            Déjanos un mensaje o llámanos para darte la mejor opción de
            decoración de tu hogar.
          </p>
        </div>

        {/* Formulario */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold leading-relaxed">
              Déjanos tu solicitud!
            </h2>
            <img src={correoicono} alt="Correo" className="w-20 h-20" />
          </div>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-1/2 p-2  rounded-md focus:outline-none focus:ring bg-[#e5e2df]"
              />
              <input
                type="text"
                placeholder="Apellido"
                className="w-1/2 p-2  rounded-md focus:outline-none focus:ring bg-[#e5e2df]"
              />
            </div>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-2 rounded-md focus:outline-none focus:ring bg-[#e5e2df]"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full p-2 rounded-md focus:outline-none focus:ring bg-[#e5e2df]"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full p-2 rounded-md focus:outline-none focus:ring bg-[#e5e2df]"
            ></textarea>
            <button
              type="submit"
              className="hover: text-black font-semibold py-2 px-4 rounded-md shadow bg-[#E5BC57]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
