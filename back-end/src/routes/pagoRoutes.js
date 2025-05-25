// src/routes/pagoRoutes.js
import express from 'express';
import { crearPreference, webhook } from '../controllers/pagoController.js';
import { verificarToken } from '../controllers/authController.js';


const router = express.Router();

// Checkout protegido (requiere JWT)
router.post('/checkout', verificarToken, crearPreference);

// Webhook público
router.post('/webhook', express.json(), webhook);

export default router;
