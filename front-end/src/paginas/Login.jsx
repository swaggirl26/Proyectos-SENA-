import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarEmail(email)) {
      setError('Por favor ingresa un correo electrónico válido (ej: usuario@email.com)');
      return;
    }

    if (password.trim() === '') {
      setError('Por favor ingresa tu contraseña');
      return;
    }

    setError('');
    alert('Inicio de sesión exitoso'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e2df] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        {/* Logo */}
        <img src="/imagenes/logo.png" alt="Logo" className="mx-auto mb-4 w-38 h-35" />

        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6">Iniciar Sesión</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" />
          <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]" />

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className=" text-black font-semibold py-2 px-4 rounded-md shadow w-full bg-[#E5BC57]" >Ingresar</button>
          <p className="text-sm">
            ¿No tienes una cuenta? <a href="/Register" className="text-blue-600 underline">Regístrate ahora</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
