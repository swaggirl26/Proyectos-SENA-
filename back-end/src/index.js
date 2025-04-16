import express from 'express';
//import servicesRoutes from './routes/servicesRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import productosRoutes from './routes/productosRoutes.js'
import sobreNosotrosRoutes from './routes/sobreNosotrosRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

// configuración de la app
const app = express();

// definir una ruta
// app.use('/api/services', servicesRoutes);
app.use('/api/inicio', homeRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/sobreNosotros', sobreNosotrosRoutes);


//definir puerto
const PORT = process.env.PORT || 4000;

//iniciar app
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
