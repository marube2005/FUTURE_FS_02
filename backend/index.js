const express = require('express');
const path = require('path')
const axios = require('axios');

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.get('/weather', async (req, res) => {
  try {
    // Replace with your weather API endpoint and API key
    const apiKey = process.env.API_KEY;
    if(!apiKey){
      throw new Error("API key is not defined. Please set the OPENWEATHER_API_KEY environment variable")
    }
    const response = await axios.get(`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=pressure&lat=30&lon=-20&zoom=5${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})