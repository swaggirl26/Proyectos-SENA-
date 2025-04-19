// routes/sobreNosotrosRoutes.js
import express from 'express';
import { obtenerSobreNosotros } from '../controllers/sobreNosotrosController.js';

const router = express.Router();

// '/api/sobreNosotros' ya está definido en index.js
router.get('/', obtenerSobreNosotros);

export default router;
 