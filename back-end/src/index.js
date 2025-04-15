import express from 'express';
import servicesRoutes from './routes/servicesRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

// configuración de la app
const app = express();

// definir una ruta
app.get('/api/services', servicesRoutes);



//definir puerto
const PORT = process.env.PORT || 4000;

//iniciar app
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
