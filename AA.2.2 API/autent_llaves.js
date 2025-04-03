import axios from 'axios';

// Configuración de la API
const WEATHER_CONFIG = {
  API_KEY: 'a94e4295c3f4e3a23f61fc9c60bfef7e', // Reemplaza con tu API key real
  BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
  UNITS: 'metric',
  LANGUAGE: 'es' // Para obtener respuestas en español
};

// Cliente HTTP configurado
const weatherClient = axios.create({
  baseURL: WEATHER_CONFIG.BASE_URL,
  timeout: 5000,
  params: {
    appid: WEATHER_CONFIG.API_KEY,
    units: WEATHER_CONFIG.UNITS,
    lang: WEATHER_CONFIG.LANGUAGE
  }
});

/**
 * Obtiene el clima actual para una ciudad
 * @param {string} city - Nombre de la ciudad a consultar
 * @returns {Promise<Object>} - Datos del clima
 */
const getWeatherData = async (city) => {
  try {
    if (!city || typeof city !== 'string') {
      throw new Error('El nombre de la ciudad debe ser una cadena de texto válida');
    }

    const response = await weatherClient.get('', {
      params: { q: city }
    });

    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].icon
    };
  } catch (error) {
    if (error.response) {
      // Error de la API
      throw new Error(`Error ${error.response.status}: ${
        error.response.data.message || 'Error al obtener datos del clima'
      }`);
    } else {
      // Error de red o validación
      throw new Error(`Error al conectar con el servicio de clima: ${error.message}`);
    }
  }
};

// Uso de la función
(async () => {
  try {
    const weather = await getWeatherData('London');
    
    console.log(`\nClima en ${weather.city}:`);
    console.log(`- Temperatura: ${weather.temperature}°C`);
    console.log(`- Condición: ${weather.condition}`);
    console.log(`- Humedad: ${weather.humidity}%`);
    console.log(`- Viento: ${weather.windSpeed} m/s`);
    
    // Puedes construir una URL de icono si lo necesitas:
    // console.log(`Icono: http://openweathermap.org/img/wn/${weather.icon}@2x.png`);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1); // Salir con código de error
  }
})();