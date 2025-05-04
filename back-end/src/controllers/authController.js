// authController.js
import prisma from '../config/prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Variables de entorno
const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';
const JWT_EXPIRES_IN = '4h';

// Variables de entorno de Mercado Pago
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || 'tu_token_de_acceso';
const MP_PUBLIC_KEY = process.env.MP_PUBLIC_KEY || 'tu_clave_publica';

export const register = async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, telefono, direccion, ciudad } = req.body;
    
    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.clientes.findFirst({
      where: { correo }
    });
    
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }
    
    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const contrasenaHash = await bcrypt.hash(contrasena, salt);
    
    // Crear el usuario
    const nuevoCliente = await prisma.clientes.create({
      data: {
        idAdmin: 1, // Asignar a un admin por defecto
        nombre,
        apellido,
        correo,
        contrase_a: contrasenaHash,
        telefono,
        direccion,
        ciudad,
        mensaje: '',
        fecha: new Date()
      }
    });
    
    // Generar token JWT
    const token = jwt.sign(
      { id: nuevoCliente.idCliente, correo: nuevoCliente.correo },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
    
    res.status(201).json({
      mensaje: 'Cliente registrado exitosamente',
      token,
      cliente: {
        id: nuevoCliente.idCliente,
        nombre: nuevoCliente.nombre,
        correo: nuevoCliente.correo
      }
    });
  } catch (error) {
    console.error('Error al registrar cliente:', error);
    res.status(500).json({ mensaje: 'Error al registrar cliente' });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;
    
    // Buscar el usuario
    const cliente = await prisma.clientes.findFirst({
      where: { correo }
    });
    
    if (!cliente) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas' });
    }
    
    // Verificar contraseña
    const contrasenaValida = await bcrypt.compare(contrasena, cliente.contrase_a);
    
    if (!contrasenaValida) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas' });
    }
    
    // Generar token JWT
    const token = jwt.sign(
      { id: cliente.idCliente, correo: cliente.correo },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
    
    res.json({
      mensaje: 'Inicio de sesión exitoso',
      token,
      cliente: {
        id: cliente.idCliente,
        nombre: cliente.nombre,
        correo: cliente.correo
      }
    });
  } catch (error) {
    console.error('Error en inicio de sesión:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

// Middleware para verificar el token JWT
export const verificarToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token inválido' });
  }
};