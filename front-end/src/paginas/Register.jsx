// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    telefono: "",
    direccion: "",
    ciudad: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCampos = (nombreCampo, valor) => {
    const nuevosErrores = { ...errores };

    switch (nombreCampo) {
      case "nombre":
      case "apellido":
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor.trim())) {
          nuevosErrores[nombreCampo] = "Solo se permiten letras.";
        } else {
          delete nuevosErrores[nombreCampo];
        }
        break;

      case "correo":
        if (valor.trim() === "") {
          nuevosErrores.correo = "El correo no puede estar vacío.";
        } else if (!validarEmail(valor.trim())) {
          nuevosErrores.correo =
            "Correo inválido. Ejemplo válido: ejemplo@correo.com";
        } else {
          delete nuevosErrores.correo;
        }
        break;

      case "contrasena":
        if (valor.length < 8) {
          nuevosErrores.contrasena =
            "La contraseña debe tener al menos 8 caracteres.";
        } else if (!/\d/.test(valor)) {
          nuevosErrores.contrasena =
            "La contraseña debe contener al menos un número.";
        } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(valor)) {
          nuevosErrores.contrasena =
            "La contraseña debe contener al menos un carácter especial (ejemplo: !@#$%^&*).";
        } else if (!/[A-Z]/.test(valor)) {
          nuevosErrores.contrasena =
            "La contraseña debe contener al menos una letra mayúscula.";
        } else {
          delete nuevosErrores.contrasena;
        }
        // Si ya existe confirmarContrasena, también validar aquí
        if (
          formData.confirmarContrasena &&
          valor !== formData.confirmarContrasena
        ) {
          nuevosErrores.confirmarContrasena = "Las contraseñas no coinciden.";
        } else if (
          formData.confirmarContrasena &&
          valor === formData.confirmarContrasena
        ) {
          delete nuevosErrores.confirmarContrasena;
        }
        break;

      case "confirmarContrasena":
        if (valor !== formData.contrasena) {
          nuevosErrores.confirmarContrasena = "Las contraseñas no coinciden.";
        } else {
          delete nuevosErrores.confirmarContrasena;
        }
        break;

      case "telefono":
        if (!/^\d+$/.test(valor.trim())) {
          nuevosErrores.telefono = "Solo se permiten números.";
        } else {
          delete nuevosErrores.telefono;
        }
        break;

      case "direccion":
        if (valor.trim() === "") {
          nuevosErrores.direccion = "La dirección no puede estar vacía.";
        } else {
          delete nuevosErrores.direccion;
        }
        break;

      case "ciudad":
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor.trim())) {
          nuevosErrores.ciudad = "La ciudad solo debe contener letras.";
        } else {
          delete nuevosErrores.ciudad;
        }
        break;

      default:
        break;
    }

    setErrores(nuevosErrores);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validarCampos(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const {
      nombre,
      apellido,
      correo,
      contrasena,
      confirmarContrasena,
      telefono,
      direccion,
      ciudad,
    } = formData;

    // 1) Verificar campos vacíos
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
      setErrorMsg("Por favor, completa todos los campos.");
      return;
    }

    // 2) Verificar que no haya errores de validación pendiente
    if (Object.keys(errores).length > 0) {
      setErrorMsg("Por favor, corrige los errores antes de continuar.");
      return;
    }

    // 3) Llamar al backend
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          contrasena,
          telefono,
          direccion,
          ciudad,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Si el backend devuelve status 400/500
        setErrorMsg(data.mensaje || data.error || "Error en el registro");
        setLoading(false);
        return;
      }

      // Si todo salió bien, guardamos token (opcional)
      localStorage.setItem("token", data.token);

      // Mostrar toast sin botón, se cierra a los 2 segundos
      await Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada correctamente.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      // Después de que el modal se cierre automáticamente, redirigir
      navigate("/login");
    } catch (error) {
      console.error("Error en fetch:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al intentar registrarte. Inténtalo de nuevo.",
        confirmButtonText: "Aceptar",
      });
      setErrorMsg("Ocurrió un error. Inténtalo de nuevo.");
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

        {/* Mensaje de error general */}
        {errorMsg && <div className="text-red-600 mb-4">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Nombre */}
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.nombre && (
              <p className="text-red-500 text-sm">{errores.nombre}</p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.apellido && (
              <p className="text-red-500 text-sm">{errores.apellido}</p>
            )}
          </div>

          {/* Correo */}
          <div>
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={formData.correo}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.correo && (
              <p className="text-red-500 text-sm">{errores.correo}</p>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.contrasena && (
              <p className="text-red-500 text-sm">{errores.contrasena}</p>
            )}
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <input
              type="password"
              name="confirmarContrasena"
              placeholder="Confirmar Contraseña"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.confirmarContrasena && (
              <p className="text-red-500 text-sm">
                {errores.confirmarContrasena}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.telefono && (
              <p className="text-red-500 text-sm">{errores.telefono}</p>
            )}
          </div>

          {/* Dirección */}
          <div>
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.direccion && (
              <p className="text-red-500 text-sm">{errores.direccion}</p>
            )}
          </div>

          {/* Ciudad */}
          <div>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad de residencia"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full m-1 p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
              disabled={loading}
            />
            {errores.ciudad && (
              <p className="text-red-500 text-sm">{errores.ciudad}</p>
            )}
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            disabled={loading}
            className="text-black font-semibold m-2 py-2 px-2 rounded-md shadow w-32 bg-[#E5BC57]"
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        <p className="mt-4">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-blue-600 underline">
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
