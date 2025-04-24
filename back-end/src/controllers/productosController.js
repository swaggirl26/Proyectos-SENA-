import cloudinary from '../utils/cloudinary.js';
import fs from 'fs/promises';
import { PrismaClient } from '../generated/prisma/index.js'; // ✅ Ruta corregida

const prisma = new PrismaClient();

export const subirImagenProducto = async (req, res) => {
  try {
    const archivo = req.file;
    const { nombre, precio, idAdmin, idCategoria, descripcion } = req.body;

    if (!archivo || !nombre || !precio || !idAdmin || !idCategoria || !descripcion) {
      return res.status(400).json({ mensaje: 'Faltan datos del producto o imagen.' });
    }

    const resultado = await cloudinary.uploader.upload(archivo.path, {
      folder: 'productos',
      public_id: archivo.originalname.split('.')[0],
    });

    await fs.unlink(archivo.path); // Borra el archivo temporal

    const nuevoProducto = await prisma.productos.create({
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        imagen_url: resultado.secure_url,
        idAdmin: parseInt(idAdmin),
        idCategoria: parseInt(idCategoria),
        creado: new Date(),
        actualizado: new Date(),
      },
    });

    res.status(201).json({ mensaje: 'Producto creado con imagen', producto: nuevoProducto });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ mensaje: 'Error al subir imagen o guardar producto.' });
  }
};
 

