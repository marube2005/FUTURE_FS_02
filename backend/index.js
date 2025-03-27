const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || process.argv[3] || 8080;

app.get('/weather', async (req, res) => {
  try {
    const city = 'London';
    const apiKey = process.env.OPENWEATHER_API_KEY; // Ensure this environment variable is set

    if (!apiKey) {
      throw new Error("API key is not defined. Please set the OPENWEATHER_API_KEY environment variable.");
    }

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric' // Optional: for temperature in Celsius
      }
    });

    const data = response.data;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    console.log(`Weather: ${weatherDescription}`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);

    res.json({
      city: data.name,
      weather: weatherDescription,
      temperature: `${temperature}°C`,
      humidity: `${humidity}%`
    });

  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Error fetching weather data', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
