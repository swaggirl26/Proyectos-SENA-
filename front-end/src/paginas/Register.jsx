// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  // 1. Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    telefono: '',
    direccion: '',       // <— Agregamos el campo “dirección”
    ciudad: ''
  });

  // 2. Estado para mensajes de error u éxito
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // 3. Para redirigir tras registro exitoso
  const navigate = useNavigate();

  // Maneja cambios en cada input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const {
      nombre,
      apellido,
      correo,
      contrasena,
      confirmarContrasena,
      telefono,
      direccion,
      ciudad
    } = formData;

    // Validaciones básicas
    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !correo.trim() ||
      !contrasena.trim() ||
      !confirmarContrasena.trim() ||
      !telefono.trim() ||
      !direccion.trim() ||
      !ciudad.trim()
    ) {
      setErrorMsg('Por favor, completa todos los campos.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setErrorMsg('Las contraseñas no coinciden.');
      return;
    }

    // 4. Llamada al back-end
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          contrasena,
          telefono,
          direccion,
          ciudad
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // Si el back-end responde con un error (400, 500, etc.)
        setErrorMsg(data.mensaje || data.error || 'Error en el registro');
        setLoading(false);
        return;
      }

      // Registro exitoso: data.token contiene el JWT
      // Puedes guardarlo en localStorage si quieres:
      localStorage.setItem('token', data.token);

      // Redirigir al login o a la página que quieras
      navigate('/login');
    } catch (error) {
      console.error('Error en fetch:', error);
      setErrorMsg('Ocurrió un error. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e2df] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <img
          src="/imagenes/logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-38 h-35"
        />
        <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>

        {errorMsg && (
          <div className="text-red-600 mb-4">{errorMsg}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="password"
            name="confirmarContrasena"
            placeholder="Confirmar Contraseña"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad de residencia"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
          />

          <button
            type="submit"
            disabled={loading}
            className="text-black font-semibold m-2 py-2 px-2 rounded-md shadow w-32 bg-[#E5BC57]"
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        
        <p className="mt-4">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-blue-600 underline">
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
