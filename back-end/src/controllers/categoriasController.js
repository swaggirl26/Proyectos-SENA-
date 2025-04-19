import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getCategorias = async (req, res) => {
  try {
    const cats = await prisma.categorias.findMany({
      include: { administrador: true, productos: true }
    });
    res.json(cats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};

export const getCategoriaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cat = await prisma.categorias.findUnique({
      where: { idCategoria: id }
    });
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(cat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener categoría' });
  }
};

export const createCategoria = async (req, res) => {
  try {
    const { nombre, descripcion, idAdmin } = req.body;
    const now = new Date();
    const nueva = await prisma.categorias.create({
      data: {
        nombre,
        descripcion,
        idAdmin: parseInt(idAdmin),
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear categoría' });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    const updated = await prisma.categorias.update({
      where: { idCategoria: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar categoría' });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.categorias.delete({ where: { idCategoria: id } });
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar categoría' });
  }
};
