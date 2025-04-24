// Con async/await aunque por ahora no lo use
export const obtenerInicio = async (req, res) => {
    try {
      res.status(200).json({ mensaje: 'Bienvenido a la API de Inicio' });
    } catch (error) {
      console.error('Error al cargar inicio:', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  };
  