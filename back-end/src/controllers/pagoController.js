import { preferencesService } from '../utils/mercadoPago.js';

export const crearPreference = async (req, res) => {
  try {
    const { title, quantity, price } = req.body;

    const preference = {
      items: [
        {
          title,
          quantity,
          currency_id: "COP", // Moneda: Pesos Colombianos
          unit_price: Number(price),
        },
      ],
      back_urls: {
        success: "http://localhost:4000/success",
        failure: "http://localhost:4000/failure",
        pending: "http://localhost:4000/pending",
      },
      auto_return: "approved",
    };

    const response = await preferencesService.create(preference);
    res.status(201).json({ init_point: response.body.init_point });
  } catch (error) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ error: error.message });
  }
};

export const webhook = (req, res) => {
  console.log('Webhook recibido:', req.body);
  // Aquí podrías actualizar el estado de la orden en tu base de datos
  res.sendStatus(200);
};
