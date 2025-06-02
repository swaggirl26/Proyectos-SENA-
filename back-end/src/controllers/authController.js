// authController.js
import prisma from '../config/prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Variables de entorno
const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';
const JWT_EXPIRES_IN = '4h';

// Variables de entorno de Mercado Pago (se mantienen aunque no son relevantes para este error)
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
        idAdmin: 1, // Asignar a un admin por defecto (asegúrate de que este idAdmin exista)
        nombre,
        apellido,
        correo,
        contrase_a: contrasenaHash, // Asegúrate de que este campo coincida con tu schema.prisma
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
    
    // --- INICIO DEPURACIÓN PARA EL ERROR DE BCrypt ---
    console.log('--- Intento de Login ---');
    console.log('Correo recibido (req.body.correo):', correo);
    console.log('Contraseña recibida (req.body.contrasena):', contrasena ? '***** (presente)' : 'AUSENTE/VACÍA'); // No loguear la contraseña en texto plano
    // --- FIN INICIO DEPURACIÓN ---

    // Buscar el usuario en la base de datos
    const cliente = await prisma.clientes.findFirst({
      where: { correo }
    });
    
    // --- INICIO DEPURACIÓN ---
    console.log('Cliente encontrado en DB:', cliente ? 'Sí' : 'No');
    if (cliente) {
      console.log('ID Cliente encontrado:', cliente.idCliente);
      console.log('Contraseña hasheada en DB (cliente.contrase_a):', cliente.contrase_a ? '***** (presente)' : 'AUSENTE/NULA');
      if (!cliente.contrase_a) {
        console.warn('ADVERTENCIA: La contraseña hasheada para este cliente en la DB es NULA o INDEFINIDA. Esto causará el error "data and hash arguments required".');
      }
    }
    // --- FIN DEPURACIÓN ---

    if (!cliente) {
      // Si el cliente no se encuentra, las credenciales son inválidas
      return res.status(400).json({ mensaje: 'Credenciales inválidas' });
    }
    
    // Verificar contraseña
    let contrasenaValida = false;
    try {
      // Aquí es donde ocurre el error "data and hash arguments required"
      // Esto significa que 'contrasena' (primer argumento) o 'cliente.contrase_a' (segundo argumento) es undefined/null
      contrasenaValida = await bcrypt.compare(contrasena, cliente.contrase_a);
    } catch (bcryptError) {
      console.error('Error específico al comparar contraseñas con bcrypt:', bcryptError.message);
      // Si el error es el esperado de bcrypt por argumentos faltantes
      if (bcryptError.message === 'data and hash arguments required') {
        return res.status(500).json({ mensaje: 'Error interno: La contraseña del usuario en la base de datos es inválida o faltante. Por favor, contacta al soporte.' });
      }
      // Otros errores de bcrypt
      return res.status(500).json({ mensaje: 'Error interno del servidor al verificar la contraseña.' });
    }
    
    if (!contrasenaValida) {
      // Si la contraseña no coincide
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
    console.error('Error en inicio de sesión (catch general):', error);
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
