import cloudinary from '../utils/cloudinary.js';
import fs from 'fs/promises';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const subirImagenProducto = async (req, res) => {
  try {
    const archivo = req.file;
    const { nombre, precio, idAdmin, idCategoria, descripcion } = req.body;

    if (!archivo || !nombre || !precio || !idAdmin || !idCategoria || !descripcion) {
      return res.status(400).json({ mensaje: 'Faltan datos del producto o imagen.' });
    }

    // Construir un public_id válido: sin espacios al inicio/fin y espacios internos por guiones bajos
    const baseName = archivo.originalname
      .split('.')[0]
      .trim()
      .replace(/\s+/g, '_');

    // Subir a Cloudinary usando el public_id limpio
    const resultado = await cloudinary.uploader.upload(archivo.path, {
      folder: 'productos',
      public_id: baseName
    });

    // Eliminar el archivo temporal local
    await fs.unlink(archivo.path);

    // Crear el registro en la base de datos
    const nuevoProducto = await prisma.productos.create({
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        imagen_url: resultado.secure_url,
        idAdmin: parseInt(idAdmin, 10),
        idCategoria: parseInt(idCategoria, 10),
        creado: new Date(),
        actualizado: new Date()
      }
    });

    res.status(201).json({ mensaje: 'Producto creado con imagen', producto: nuevoProducto });
  } catch (error) {
    console.error('Error al subir imagen o guardar producto:', error);
    res.status(500).json({ mensaje: 'Error al subir imagen o guardar producto.' });
  }
};
