function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div>
          <div className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-indigo-400 text-2xl"></span>
          </div>
          <p className="mb-4">
            Logo
          </p>
          <div className="flex space-x-4 text-lg text-white">
            
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Servicios</h4>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Nosotros</h4>
        </div>

         <div>
          <h4 className="text-white font-semibold mb-3">Dirección</h4>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025
      </div>

    </footer>
  )
  }
export default Footer;