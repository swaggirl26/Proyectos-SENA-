// controllers/homeController.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const obtenerInicio = async (req, res) => {
    try {
        // Aquí puedes traer información dinámica si tienes una tabla para el contenido del home
        // Por ejemplo, traer los productos destacados o banners
        const productosDestacados = await prisma.producto.findMany({
            where: {
                destacado: true
            },
            take: 3
        });

        res.json({
            mensaje: 'Bienvenido a la página de inicio',
            destacados: productosDestacados
        });

    } catch (error) {
        console.error('Error al obtener el inicio:', error);
        res.status(500).json({ mensaje: 'Hubo un error al cargar el contenido del inicio' });
    }
};
