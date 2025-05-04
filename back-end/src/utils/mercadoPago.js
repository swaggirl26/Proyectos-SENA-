import mercadopago from 'mercadopago';

// Configura el cliente de Mercado Pago
mercadopago.accessToken = process.env.MP_ACCESS_TOKEN;

// Exporta el servicio de preferencias
export const preferencesService = mercadopago.preferences;