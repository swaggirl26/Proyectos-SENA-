import express from 'express';
import {
  getAdministradores,
  getAdministradorById,
  createAdministrador,
  updateAdministrador,
  deleteAdministrador
} from '../controllers/administradorController.js';

const router = express.Router();

router.get('/', getAdministradores);
router.get('/:id', getAdministradorById);
router.post('/', createAdministrador);
router.put('/:id', updateAdministrador);
router.delete('/:id', deleteAdministrador);

export default router;
