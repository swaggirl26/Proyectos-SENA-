// src/controllers/pagoController.js
import mercadopago from '../utils/mercadoPago.js';

export const crearPreference = async (req, res) => {
  try {
    const preference = await mercadopago.preference.create({
      body: {
        items: [
          {
            title: 'Panel Japonés',
            quantity: 1,
            unit_price: 344500.30,
            currency_id: 'COP'
          }
        ],
        back_urls: {
          success: 'http://localhost:5173/success',
          failure: 'http://localhost:5173/failure',
          pending: 'http://localhost:5173/pending',
        },
        auto_return: 'approved',
      }
    });

    res.status(200).json({
      id: preference.id,
      init_point: preference.init_point,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear la preferencia' });
  }
};
// src/controllers/pagoController.js

export const webhook = (req, res) => {
  console.log('Webhook MP payload:', req.body);
  res.sendStatus(200);
};
