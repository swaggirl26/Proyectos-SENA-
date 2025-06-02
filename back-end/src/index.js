import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // <-- Importa el middleware CORS

// Importar todas las rutas
import administradorRoutes from './routes/administradorRoutes.js';
import authRoutes from './routes/authRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import clientesRoutes from './routes/clientesRoutes.js';
import contactoRoutes from './routes/contactoRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import pagoRoutes from './routes/pagoRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import sobreNosotrosRoutes from './routes/sobreNosotrosRoutes.js';

dotenv.config();

const app = express();

// --- Configuración CORS ---
// Opción 1: Permitir cualquier origen (útil para desarrollo)
app.use(cors());

// Opción 2: Permitir solo el origen de tu frontend (MÁS SEGURO y recomendado)
/*
app.use(cors({
  origin: 'http://localhost:5173' // Asegúrate que esta sea la URL exacta de tu frontend
}));
*/
// --- Fin Configuración CORS ---


app.use(express.json()); // Habilita el parsing de JSON para las solicitudes

// Definir las rutas base para cada módulo
app.use('/api/administrador', administradorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/pagos', pagoRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/sobrenosotros', sobreNosotrosRoutes);

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});