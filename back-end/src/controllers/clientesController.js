import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getClientes = async (req, res) => {
  try {
    const clients = await prisma.clientes.findMany({
      include: { administrador: true }
    });
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await prisma.clientes.findUnique({
      where: { idCliente: id }
    });
    if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
};

export const createCliente = async (req, res) => {
  try {
    const {
      nombre, apellido, correo, contrase_a,
      telefono, direccion, ciudad, mensaje, fecha, idAdmin
    } = req.body;
    const nuevo = await prisma.clientes.create({
      data: {
        nombre,
        apellido,
        correo,
        contrase_a,
        telefono,
        direccion,
        ciudad,
        mensaje,
        fecha: new Date(fecha),
        idAdmin: parseInt(idAdmin)
      }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = { ...req.body };
    if (data.fecha) data.fecha = new Date(data.fecha);
    const updated = await prisma.clientes.update({
      where: { idCliente: id },
      data
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.clientes.delete({ where: { idCliente: id } });
    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};
 