import express from 'express';
//import servicesRoutes from './routes/servicesRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import productosRoutes from './routes/productosRoutes.js'
import sobreNosotrosRoutes from './routes/sobreNosotrosRoutes.js'
import contactoRoutes from './routes/contactoRoutes.js';
import serviciosRoutes from './routes/servicesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import pagoRoutes from './routes/pagoRoutes.js';

import dotenv from 'dotenv'

dotenv.config();

// configuración de la app
const app = express();

// middleware para leer datos JSON del body, contactoRoutes.js lo necesita.
app.use(express.json());

// definir una ruta
// app.use('/api/services', servicesRoutes);
app.use('/api/inicio', homeRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/sobreNosotros', sobreNosotrosRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/servicios', serviciosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/pagos', pagoRoutes);




//definir puerto
const PORT = process.env.PORT || 4000;

//iniciar app
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
