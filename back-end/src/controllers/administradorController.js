import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAdministradores = async (req, res) => {
  try {
    const admins = await prisma.administrador.findMany();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener administradores' });
  }
};

export const getAdministradorById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const admin = await prisma.administrador.findUnique({
      where: { idAdmin: id }
    });
    if (!admin) return res.status(404).json({ error: 'Administrador no encontrado' });
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener administrador' });
  }
};

export const createAdministrador = async (req, res) => {
  try {
    const { usuario, contrase_a, correo, rol } = req.body;
    const now = new Date();
    const nuevo = await prisma.administrador.create({
      data: {
        usuario,
        contrase_a,
        correo,
        rol,
        creado: now,
        actualizado: now
      }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear administrador' });
  }
};

export const updateAdministrador = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body, actualizado: new Date() };
    const actualizado = await prisma.administrador.update({
      where: { idAdmin: id },
      data
    });
    res.json(actualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar administrador' });
  }
};

export const deleteAdministrador = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.administrador.delete({ where: { idAdmin: id } });
    res.json({ message: 'Administrador eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar administrador' });
  }
};
