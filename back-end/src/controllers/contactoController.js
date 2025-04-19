export const enviarMensajeContacto = (req, res) => {
    const { nombre, apellido, correo, asunto, mensaje } = req.body;

    // Validación: asegurarse de que todos los campos estén presentes
    if (!nombre || !apellido || !correo || !asunto || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Aquí iría la lógica para guardar en BD o enviar un correo (por ahora solo simula)
    res.json({
        mensaje: 'Mensaje recibido correctamente',
        datos: { nombre, apellido, correo, asunto, mensaje }
    });
};
 