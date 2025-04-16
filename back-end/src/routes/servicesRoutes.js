import express from 'express';

const router = express.Router();

//Definir una ruta
router.get('/', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Confección de cortinas' },
        { id: 2, nombre: 'Instalación' },
        { id: 3, nombre: 'Lavado y mantenimiento' },
        { id: 4, nombre: 'Reparación y restauración' }
    ];

res.json(productos);
});


export default router;
