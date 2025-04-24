// controllers/sobreNosotrosController.js

import { PrismaClient } from '../../src/generated/prisma/index.js';
export const obtenerSobreNosotros = (req, res) => {
    const sobreNosotros = [
      { id: 1, nombre: 'Visión' },
      { id: 2, nombre: 'Misión' },
      { id: 3, nombre: 'Valores' },
    ];
  
    res.json(sobreNosotros);
  };
   