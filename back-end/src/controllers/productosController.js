import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProductos = async (req, res) => {
  try {
    const items = await prisma.productos.findMany({
      include: { categorias: true, administrador: true }
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = await prisma.productos.findUnique({ where: { idProducto: id } });
    if (!item) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

export const createProducto = async (req, res) => {
  try {
    const {
      nombre, descripcion, imagen_url,
      precio, idCategoria, idAdmin
    } = req.body;
    const now = new Date();
    const nuevo = await prisma.productos.create({
      data: {
        nombre,
        descripcion,
        imagen_url,
        precio: precio ? parseFloat(precio) : undefined,
        idCategoria: parseInt(idCategoria),
        idAdmin: parseInt(idAdmin),
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    if (data.precio) data.precio = parseFloat(data.precio);
    if (data.idCategoria) data.idCategoria = parseInt(data.idCategoria);
    if (data.idAdmin) data.idAdmin = parseInt(data.idAdmin);
    const updated = await prisma.productos.update({
      where: { idProducto: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.productos.delete({ where: { idProducto: id } });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
