// src/controllers/pagoController.js
import { preferencesService } from '../utils/mercadoPago.js';

export const crearPreference = async (req, res) => {
  try {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Envía un array de items válido' });
    }
    // items debe tener { title, unit_price, quantity, currency_id }
    const response = await preferencesService.create({ items });

    res.status(201).json({
      id:         response.body.id,
      init_point: response.body.init_point
    });
  } catch (err) {
    console.error('Error creando preference MP:', err);
    res.status(500).json({ error: 'No se pudo crear la preference' });
  }
};

// Webhook público (opcional)
export const webhook = (req, res) => {
  console.log('Webhook MP payload:', req.body);
  // Aquí podrías actualizar el estado de la orden en tu BD
  res.sendStatus(200);
};
