import express from 'express';
const router = express.Router();

// POST /api/contacto - Recibir mensaje de contacto
router.post('/', (req, res) => {
    const { nombre, apellido, correo, asunto, mensaje } = req.body;

    if (!nombre || !apellido || !correo || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

  // enviar correo o guardar en base de datos
    res.json({
    mensaje: 'Mensaje recibido correctamente',
    datos: { nombre, apellido, correo, asunto, mensaje }
    });
});

export default router;
