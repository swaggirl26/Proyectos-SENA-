import express from 'express';
import { crearPreference, webhook } from '../controllers/pagoController.js';

const router = express.Router();

// Ruta para crear una preferencia de pago
router.post('/checkout', crearPreference);

// Ruta para manejar el webhook de Mercado Pago
router.post('/webhook', express.json(), webhook);

export default router;