import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPaginas = async (req, res) => {
  try {
    const pages = await prisma.paginas.findMany({
      include: { administrador: true }
    });
    res.json(pages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener páginas' });
  }
};

export const getPaginaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const page = await prisma.paginas.findUnique({
      where: { idPagina: id }
    });
    if (!page) return res.status(404).json({ error: 'Página no encontrada' });
    res.json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener página' });
  }
};

export const createPagina = async (req, res) => {
  try {
    const { nombre, contenido, tipo, idAdmin } = req.body;
    const now = new Date();
    const nueva = await prisma.paginas.create({
      data: {
        nombre,
        contenido,
        tipo,
        idAdmin: parseInt(idAdmin),
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear página' });
  }
};

export const updatePagina = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    const updated = await prisma.paginas.update({
      where: { idPagina: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar página' });
  }
};

export const deletePagina = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.paginas.delete({ where: { idPagina: id } });
    res.json({ message: 'Página eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar página' });
  }
};
