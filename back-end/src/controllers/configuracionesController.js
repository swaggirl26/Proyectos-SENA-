import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getConfiguraciones = async (req, res) => {
  try {
    const configs = await prisma.configuraciones.findMany({
      include: { administrador: true }
    });
    res.json(configs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener configuraciones' });
  }
};

export const getConfiguracionById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const config = await prisma.configuraciones.findUnique({
      where: { idConfiguracion: id }
    });
    if (!config) return res.status(404).json({ error: 'Configuración no encontrada' });
    res.json(config);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener configuración' });
  }
};

export const createConfiguracion = async (req, res) => {
  try {
    const { nombre, valor, descripcion, idAdmin } = req.body;
    const now = new Date();
    const nueva = await prisma.configuraciones.create({
      data: {
        nombre,
        valor,
        descripcion,
        idAdmin: parseInt(idAdmin),
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear configuración' });
  }
};

export const updateConfiguracion = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    const updated = await prisma.configuraciones.update({
      where: { idConfiguracion: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar configuración' });
  }
};

export const deleteConfiguracion = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.configuraciones.delete({ where: { idConfiguracion: id } });
    res.json({ message: 'Configuración eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar configuración' });
  }
};
