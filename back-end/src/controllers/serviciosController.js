import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getServicios = async (req, res) => {
  try {
    const svcs = await prisma.servicios.findMany({
      include: { administrador: true }
    });
    res.json(svcs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
};

export const getServicioById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const svc = await prisma.servicios.findUnique({ where: { idServicio: id } });
    if (!svc) return res.status(404).json({ error: 'Servicio no encontrado' });
    res.json(svc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener servicio' });
  }
};

export const createServicio = async (req, res) => {
  try {
    const { nombre, descripcion, idAdmin } = req.body;
    const now = new Date();
    const nuevo = await prisma.servicios.create({
      data: {
        nombre,
        descripcion,
        idAdmin: parseInt(idAdmin),
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear servicio' });
  }
};

export const updateServicio = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    if (data.idAdmin) data.idAdmin = parseInt(data.idAdmin);
    const updated = await prisma.servicios.update({
      where: { idServicio: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar servicio' });
  }
};

export const deleteServicio = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.servicios.delete({ where: { idServicio: id } });
    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar servicio' });
  }
};
 