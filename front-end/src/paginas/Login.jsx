// src/paginas/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones de correo
    if (email.trim() === "") {
      setError(
        "Por favor ingresa un correo electrónico (ejemplo: example@correo.com)"
      );
      return;
    }
    if (!email.includes("@")) {
      setError('El correo debe contener "@" (ejemplo: example@correo.com)');
      return;
    }
    if (!email.includes(".")) {
      setError(
        "El correo debe contener un punto (ejemplo: example@correo.com)"
      );
      return;
    }
    if (!validarEmail(email)) {
      setError("Ingresa un correo válido (ejemplo: example@correo.com)");
      return;
    }

    // Validaciones de contraseña
    if (password.trim() === "") {
      setError("Por favor ingresa tu contraseña");
      return;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (!/\d/.test(password)) {
      setError("La contraseña debe contener al menos un número");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError(
        "La contraseña debe contener al menos un carácter especial (ejemplo: !@#$%^&*)"
      );
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError(
        "La contraseña debe contener al menos una letra mayúscula (ejemplo: A)"
      );
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el inicio de sesión");
      }

      const data = await response.json();

      // Aquí podrías guardar el token JWT si tu backend lo envía
      // localStorage.setItem('token', data.token);
      // localStorage.setItem('user', JSON.stringify(data.cliente));

      // Mostrar modal de éxito sin botón de continuar (se cierra en 3s)
      await Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        text: "Bienvenido de nuevo.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      navigate("/dashboard");
    } catch (err) {
      console.error("Error en fetch:", err.message);
      // Mostrar modal de error con botón “Aceptar”
      await Swal.fire({
        icon: "error",
        title: "Error",
        text:
          err.message ||
          "Ocurrió un error inesperado al intentar iniciar sesión.",
        confirmButtonText: "Aceptar",
      });
      setError(
        err.message || "Ocurrió un error inesperado al intentar iniciar sesión."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e2df] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        {/* Logo */}
        <img
          src="/imagenes/logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-38 h-35"
        />

        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6">Iniciar Sesión</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md focus:outline-none focus:border-yellow-400 bg-[#e5e2df]"
            disabled={loading}
          />

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="text-black font-semibold py-2 px-4 rounded-md shadow w-32 bg-[#E5BC57]"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
          <p className="text-sm">
            ¿No tienes una cuenta?{" "}
            <a href="/Register" className="text-blue-600 underline">
              Regístrate ahora
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
