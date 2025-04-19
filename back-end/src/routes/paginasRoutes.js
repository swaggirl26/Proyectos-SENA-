import express from 'express';
import {
  getPaginas,
  getPaginaById,
  createPagina,
  updatePagina,
  deletePagina
} from '../controllers/paginasController.js';

const router = express.Router();
 
router.get('/', getPaginas);
router.get('/:id', getPaginaById);
router.post('/', createPagina);
router.put('/:id', updatePagina);
router.delete('/:id', deletePagina);

export default router;
