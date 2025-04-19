import express from 'express';
import { obtenerInicio } from '../controllers/homeController.js';

const router = express.Router();

// Ruta principal de inicio
router.get('/', obtenerInicio);

export default router;
