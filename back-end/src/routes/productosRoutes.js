import express from 'express';

import multer from 'multer';
import { subirImagenProducto } from '../controllers/productosController.js';

const router = express.Router();

// Middleware para subir archivos con multer
const upload = multer({ dest: 'uploads/' });

router.post('/subir', upload.single('imagen'), subirImagenProducto);

export default router;
