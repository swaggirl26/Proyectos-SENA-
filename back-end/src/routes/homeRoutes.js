import express from 'express';

const router = express.Router();

// Aquí solo va '/', porque '/api/home' ya se definió en index.js
router.get('/', (req, res) => {
    const inicio = [
        { id: 1, nombre: 'Hola mundo' },
    ];

    res.json(inicio);
});

export default router;
