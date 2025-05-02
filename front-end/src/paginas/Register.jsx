import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
    telefono: '',
    ciudad: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const {
      nombre,
      correo,
      contraseña,
      confirmarContraseña,
      telefono,
      ciudad
    } = formData;

    if (
      !nombre.trim() ||
      !correo.trim() ||
      !contraseña.trim() ||
      !confirmarContraseña.trim() ||
      !telefono.trim() ||
      !ciudad.trim()
    ) {
      alert('Por favor, diligencia todos los campos');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Registro exitoso.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e2df] px-4">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <img src="/imagenes/logo.png" alt="Logo" className="mx-auto mb-4 w-38 h-35" />
      <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
      
      <input type="text" placeholder="Nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="text" placeholder="Apellido" value={formData.apellido} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="email" placeholder="Correo Electrónico" value={formData.correo} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="password" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="password" placeholder="Confirmar Contraseña" value={formData.confirmarContraseña} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="tel" placeholder="Número de teléfono" value={formData.telefono} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      <input type="text" placeholder="Ciudad de residencia" value={formData.ciudad} onChange={handleChange} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" /><br />
      
      <p>
        ¿Ya tienes una cuenta? <a href="/Login" className="text-blue-600 underline">Iniciar sesión</a>
      </p>
      <button onClick={handleSubmit} className=" text-black font-semibold py-2 px-4 rounded-md shadow w-full bg-[#E5BC57]">Registrarse</button>
      </div>
    </div>
  );
}

export default Register;
