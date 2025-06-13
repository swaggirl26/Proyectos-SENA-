import React, { useState } from 'react';
import { ShoppingCart, Package, CreditCard, MapPin } from 'lucide-react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    calle: '',
    numero1: '',
    numero2: '',
    complemento: '',
    telefono: '',
    ancho: '',
    alto: '',
    cantidad: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const incrementQuantity = () => {
    setFormData(prev => ({
      ...prev,
      cantidad: prev.cantidad + 1
    }));
  };

  const decrementQuantity = () => {
    setFormData(prev => ({
      ...prev,
      cantidad: Math.max(1, prev.cantidad - 1)
    }));
  };

  const steps = [
    { id: 1, name: 'Carro', icon: ShoppingCart, active: false },
    { id: 2, name: 'Entrega', icon: Package, active: true },
    { id: 3, name: 'Pago', icon: CreditCard, active: false }
  ];

  const productPrice = 344500.30;
  const shipping = 0;
  const total = productPrice * formData.cantidad + shipping;

  return (
    <div className="min-h-screen bg-[#e5e2df]">
      <div className="max-w-6xl mt-20 mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex flex-col items-center ${step.active ? 'text-bg-[#E5BC57]' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 mb-2 ${
                  step.active 
                    ? 'bg-[#E5BC57] text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-0.5 mx-8 mt-6 ${
                  step.active ? 'bg-[#E5BC57]' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white rounded-lg shadow-lg p-6  hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-6">
              <MapPin className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">
                Agrega la dirección para la entrega:
              </h2>
            </div>

            <div className="space-y-4">
              {/* Calle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                <input
                  type="text"
                  name="calle"
                  value={formData.calle}
                  onChange={handleInputChange}
                  placeholder="Calle"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Números */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                  <input
                    type="text"
                    name="numero1"
                    value={formData.numero1}
                    onChange={handleInputChange}
                    placeholder="Ej. 61"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Número adicional</label>
                  <input
                    type="text"
                    name="numero2"
                    value={formData.numero2}
                    onChange={handleInputChange}
                    placeholder="Ej. 35"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Complemento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Complemento de dirección</label>
                <textarea
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleInputChange}
                  placeholder="Ej. Torre 9, apto 210, etc."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <div className="flex">
                  <div className="flex items-center px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                    <div className="flex space-x-1">
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Ej. 3112345678"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-white rounded-lg shadow-lg p-6  hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Resumen de compra:</h3>

            {/* Producto */}
            <div className="flex space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">PANEL</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">PANEL JAPONÉS</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-600">Color:</span>
                  <div className="w-3 h-3 bg-[#E5BC57] rounded-full"></div>
                </div>
                
                {/* Dimensiones */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <input
                    type="text"
                    name="ancho"
                    value={formData.ancho}
                    onChange={handleInputChange}
                    placeholder="Ancho"
                    className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="alto"
                    value={formData.alto}
                    onChange={handleInputChange}
                    placeholder="Alto"
                    className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Cantidad */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decrementQuantity}
                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{formData.cantidad}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Totales */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${(productPrice * formData.cantidad).toLocaleString('es-CO', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Envío:</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                <span>Total a pagar:</span>
                <span>${total.toLocaleString('es-CO', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <button className="w-60 mx-30 mt-6 bg-[#E5BC57]  text-black font-medium py-3 rounded-lg transition 
          hover:brightness-110 hover:scale-105 active:scale-95" >
              Continuar al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}