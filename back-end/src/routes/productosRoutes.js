import express from 'express';

const router = express.Router();

// Aquí solo va '/', porque '/api/home' ya se definió en index.js
router.get('/', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Onda Serena' },
    ];

    res.json(productos);
});

export default router;
