import express from 'express';
//import servicesRoutes from './routes/servicesRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

// configuración de la app
const app = express();

// definir una ruta
// app.use('/api/services', servicesRoutes);
app.use('/api/inicio', homeRoutes);



//definir puerto
const PORT = process.env.PORT || 4000;

//iniciar app
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
