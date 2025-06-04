// src/paginas/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.trim() === "") {
      setEmailError("Por favor ingresa un correo electrónico");
    } else if (!value.includes("@")) {
      setEmailError('El correo debe contener "@"');
    } else if (!value.includes(".")) {
      setEmailError("El correo debe contener un punto (ej: .com)");
    } else if (!validarEmail(value)) {
      setEmailError("Ingresa un correo válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.trim() === "") {
      setPasswordError("Por favor ingresa tu contraseña");
    } else if (value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else if (!/\d/.test(value)) {
      setPasswordError("La contraseña debe contener al menos un número");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setPasswordError(
        "La contraseña debe contener al menos un carácter especial (ej: !@#$%^&*)"
      );
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError(
        "La contraseña debe contener al menos una letra mayúscula (ej: A)"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos o con error antes de enviar
    if (email.trim() === "") {
      setEmailError("Por favor ingresa un correo electrónico");
    }
    if (password.trim() === "") {
      setPasswordError("Por favor ingresa tu contraseña");
    }
    if (
      emailError ||
      passwordError ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return;
    }

    setServerError("");
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
        throw new Error(errorData.mensaje || "Error en el inicio de sesión");
      }

      const data = await response.json();

      await Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        text: "Bienvenido de nuevo.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      navigate("/dashboard");
    } catch (err) {
      console.error("Error en fetch:", err.message);
      setServerError(
        err.message || "Ocurrió un error inesperado al intentar iniciar sesión."
      );
      await Swal.fire({
        icon: "error",
        title: "Error",
        text:
          err.message ||
          "Ocurrió un error inesperado al intentar iniciar sesión.",
        confirmButtonText: "Aceptar",
      });
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
          {/* Input de correo */}
          <div>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                emailError ? "border border-red-500" : "focus:border-yellow-400"
              }`}
              disabled={loading}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Input de contraseña */}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full p-2 rounded-md focus:outline-none bg-[#e5e2df] ${
                passwordError
                  ? "border border-red-500"
                  : "focus:border-yellow-400"
              }`}
              disabled={loading}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Error del servidor */}
          {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

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
