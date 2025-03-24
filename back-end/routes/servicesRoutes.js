import express from 'express';

const router = express.Router();

// Definir una ruta
router.get('/', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
    ];

    res.json(productos);
});

export default router;
