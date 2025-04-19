import express from 'express';
import {
  getConfiguraciones,
  getConfiguracionById,
  createConfiguracion,
  updateConfiguracion,
  deleteConfiguracion
} from '../controllers/configuracionesController.js';

const router = express.Router();

router.get('/', getConfiguraciones);
router.get('/:id', getConfiguracionById);
router.post('/', createConfiguracion);
router.put('/:id', updateConfiguracion);
router.delete('/:id', deleteConfiguracion);

export default router;
