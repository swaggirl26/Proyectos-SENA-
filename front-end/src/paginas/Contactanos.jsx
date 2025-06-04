// src/components/Contactanos.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import correoicono from "../assets/img/correoicono.ico";

function Contactanos() {
<<<<<<< HEAD
    return (
      <div className="min-h-screen bg-[#e5e2df] mt-20 flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {/* Lado izquierdo */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">¡Contáctanos!</h2>
            <p className="text-lg leading-relaxed">
              Déjanos un mensaje o llámanos para darte la mejor opción de decoración de tu hogar.
            </p>
          </div>
  
          {/* Formulario */}
          <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-6">
=======
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
  });
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCampo = (name, value) => {
    let error = "";
    switch (name) {
      case "nombre":
      case "apellido":
        if (!value.trim()) {
          error = "Este campo es obligatorio.";
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
          error = "Solo se permiten letras.";
        }
        break;
      case "correo":
        if (!value.trim()) {
          error = "Por favor ingresa un correo electrónico.";
        } else if (!value.includes("@")) {
          error = 'El correo debe contener "@".';
        } else if (!value.includes(".")) {
          error = "El correo debe contener un punto (ej: .com).";
        } else if (!validarEmail(value.trim())) {
          error = "Ingresa un correo válido.";
        }
        break;
      case "mensaje":
        if (!value.trim()) {
          error = "El mensaje no puede estar vacío.";
        }
        break;
      default:
        break;
    }
    setErrores((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validarCampo(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar todos los campos una última vez
    Object.entries(formData).forEach(([key, val]) => {
      validarCampo(key, val);
    });
    // Si hay errores, no enviar
    if (
      Object.values(errores).some((err) => err) ||
      Object.values(formData).some((v) => !v.trim())
    ) {
      return;
    }

    setLoading(true);
    // Simulación de envío (aquí iría el fetch a tu backend si aplica)
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      setFormData({ nombre: "", apellido: "", correo: "", mensaje: "" });
      setErrores({});
    }, 1000);
  };

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
>>>>>>> d1faa42fec6322020309246708cc16eaaf8a7fc3
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold leading-relaxed text-right">
              ¡Déjanos tu solicitud!
            </h2>
            <img src={correoicono} alt="Correo" className="w-20 h-20 ml-auto" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                    errores.nombre ? "border border-red-500" : "focus:ring"
                  }`}
                  disabled={loading}
                />
                {errores.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                    errores.apellido ? "border border-red-500" : "focus:ring"
                  }`}
                  disabled={loading}
                />
                {errores.apellido && (
                  <p className="text-red-500 text-sm mt-1">
                    {errores.apellido}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="correo"
                placeholder="Correo Electrónico"
                value={formData.correo}
                onChange={handleChange}
                className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                  errores.correo ? "border border-red-500" : "focus:ring"
                }`}
                disabled={loading}
              />
              {errores.correo && (
                <p className="text-red-500 text-sm mt-1">{errores.correo}</p>
              )}
            </div>
            <div>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                  errores.mensaje ? "border border-red-500" : "focus:ring"
                }`}
                disabled={loading}
              ></textarea>
              {errores.mensaje && (
                <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
              )}
            </div>
            <button
              type="submit"
              className="text-black font-semibold py-2 px-4 rounded-md shadow bg-[#E5BC57]"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
