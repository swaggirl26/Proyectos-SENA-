// src/utils/mercadoPago.js
import mercadopago from 'mercadopago';

// Configura el cliente de Mercado Pago
mercadopago.accessToken = process.env.MP_ACCESS_TOKEN;

export const preferencesService = mercadopago.preferences;
