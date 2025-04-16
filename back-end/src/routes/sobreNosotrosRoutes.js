import express from 'express';

const router = express.Router();

// Aquí solo va '/', porque '/api/home' ya se definió en index.js
router.get('/', (req, res) => {
    const sobreNosotros = [
        { id: 1, nombre: 'Vision' },
    ];

    res.json(sobreNosotros);
});

export default router;
