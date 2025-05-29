import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';
import logonav from "../assets/img/logonav.png"

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div>
          <div className="flex items-center">
            <img src={logonav} alt="logo" className="h-40 w-auto" />
            <span className="text-indigo-400 text-2xl"></span>
          </div>
        </div>
        

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2">
            <li>+57 313 744 2462</li>
            <a href="mailto:cortinasyservicios1@gmail.com"className='hover:text-[#E5BC57]'><li>cortinasyservicios1@gmail.com</li></a>
            <li></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2">
            <li>Confección de Cortinas</li>
            <li>Instalación</li>
            <li>Lavado y Mantenimiento</li>
            <li>Reparación y Restauración</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Políticas</h4>
          <ul className="space-y-2">
            <li>Políticas de Reembolso</li>
            <li>Aviso de Privacidad</li>
            <li>Términos y Condiciones</li>
          </ul>
        </div>

         <div>
          <div className="flex space-x-10 text-[#E5BC57] text-2xl">
            <a href=""><FaFacebookF/></a>
            <a href=""><FaInstagram/></a>
            <a href="https://wa.me/573137442462"><FaWhatsapp/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 
      </div>

    </footer>
  )
  }
export default Footer;