const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS
app.use(cors({
  origin: "*",  // Change to your frontend URL in production
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.get("/weather", async (req, res) => {
  try {
    const apiKey = "12f09e3ad3dd9f306d4b6cad512aa63a"; // Replace with your actual API key
    const city = req.query.city || "London"; // Default city if none provided

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    );

    const data = response.data;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const country = data.sys.country;
    const timezoneOffset = data.timezone; // Offset in seconds

    // Get current UTC date
    const currentUtcTime = new Date();

    // Convert UTC to the city's local time
    const localTime = new Date(currentUtcTime.getTime() + timezoneOffset * 1000);

    // Format the time properly
    const formattedTime = localTime.toLocaleTimeString("en-US", { 
      hour: "2-digit", 
      minute: "2-digit", 
      second: "2-digit", 
      hour12: true
    });

    // Format the date (Day, Month Date, Year)
    const formattedDate = localTime.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    res.json({
      city: data.name,
      country: country,
      weather: weatherDescription,
      temperature: temperature, // Sending raw temperature for comparison
      temperature_display: `${temperature}°C`, // For UI
      humidity: `${humidity}%`,
      date_time: `${formattedDate} - ${formattedTime}`, // Correct time & date
    });

  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.status(500).json({ error: "Error fetching weather data", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
