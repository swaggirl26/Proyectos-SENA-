import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProgressBar = () => (
  <div className="mt-40 mb-30">
    <div className="flex items-center justify-between w-full max-w-md mx-auto">
      {['Carro', 'Entrega', 'Pago'].map((step, i) => {
        const active = i === 0;
        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full mb-1 ${active ? 'bg-yellow-600' : 'bg-gray-400'}`}></div>
              <span className="text-sm font-semibold">{step}</span>
            </div>
            {i < 2 && <div className={`flex-1 h-0.5 mx-2 ${i < 1 ? 'bg-yellow-600' : 'bg-gray-400'}`}></div>}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

const AddressForm = () => (
  <div className="bg-white p-4 rounded shadow mb-6">
    <h3 className="text-lg font-semibold mb-4">Agrega la dirección para la entrega:</h3>
    <input className="border p-2 rounded w-full mb-3 text-sm" placeholder="Calle" />
    <div className="flex gap-3 mb-3">
      <input className="border p-2 rounded w-1/2 text-sm" placeholder="Ej. 61" />
      <input className="border p-2 rounded w-1/2 text-sm" placeholder="Ej. 35" />
    </div>
    <textarea className="border p-2 rounded w-full mb-3 text-sm" placeholder="Ej. Torre 9, apto 210, etc." />
    <div className="flex items-center gap-2">
      <img src="https://flagcdn.com/w40/co.png" alt="Colombia" className="w-6 h-4" />
      <input className="border p-2 rounded flex-1 text-sm" placeholder="Ej. 3112345678" />
    </div>
  </div>
);

const PurchaseSummary = () => (
  <div className="bg-white p-4 rounded shadow mb-6">
    <h3 className="text-lg font-semibold mb-4">Resumen de compra:</h3>
    <div className="flex gap-4 mb-3">
      <img src="https://via.placeholder.com/120x100" alt="Cortina" className="rounded-md" />
      <div className="text-sm flex-1">
        <p className="font-semibold">PANEL JAPONÉS</p>
        <div className="flex items-center gap-2 mb-2">
          <span>Color:</span>
          <div className="w-5 h-5 rounded-full bg-yellow-700 border"></div>
        </div>
        <div className="flex gap-2 mb-2">
          <input className="border p-2 rounded text-sm w-1/2" placeholder="Ancho (m)" />
          <input className="border p-2 rounded text-sm w-1/2" placeholder="Alto (m)" />
        </div>
        <div className="flex items-center gap-3 mb-2">
          <button className="px-3 py-1 border rounded">-</button>
          <span>1</span>
          <button className="px-3 py-1 border rounded">+</button>
        </div>
        <p className="text-right font-semibold">$344.500,30</p>
      </div>
    </div>
    <div className="text-sm text-right space-y-1">
      <p>Subtotal: $344.500,30</p>
      <p>Envío: $0</p>
      <p className="font-semibold">Total a pagar: $344.500,30</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f8f5f0] text-[#000]">
      <ProgressBar />
      <AddressForm />
      <PurchaseSummary />
      <button className="bg-yellow-600 text-white px-6 py-2 rounded font-semibold block mx-auto">
        Continuar
      </button>
    </div>
  );
}

export default App;
