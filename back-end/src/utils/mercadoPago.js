// src/utils/mercadoPago.js
// Importa específicamente la clase MercadoPagoConfig del paquete 'mercadopago'
import { MercadoPagoConfig } from 'mercadopago'; 
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde .env

// 1. Crea una nueva instancia del cliente de Mercado Pago
// Pásale tu Access Token al constructor de la clase.
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

// 2. Exporta el servicio de preferencias desde la instancia del cliente.
// Ahora preferencesService estará correctamente definido.
export const preferencesService = client.preferences;

// Si en el futuro necesitas otros servicios (ej. Payments, Customers),
// los accederías desde esta misma instancia 'client':
// export const paymentService = client.payments;
// export const customerService = client.customers;