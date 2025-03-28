import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London"); // Default city

  // Function to fetch weather data
  const fetchWeather = (searchCity) => {
    axios.get(`https://8080-idx-futurefs02-1742990871805.cluster-wxkvpdxct5e4sxx4nbgdioeb46.cloudworkstations.dev/weather?city=${searchCity}`, {
      withCredentials: true
    })
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  };

  // Fetch weather on first load
  useEffect(() => {
    fetchWeather(city);
  }, []);

  // Handle input change
  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    fetchWeather(city);
  };

  // Function to select weather icon based on temperature
  const getWeatherIcon = () => {
    if (!weather) return <i className="bx bx-search-alt-2 weather-icon"></i>; // Default
    if (weather.temperature > 25) return <i className='bx bxs-sun weather-icon'></i>; // Hot
    if (weather.temperature < 10) return <i className='bx bx-cloud-snow weather-icon'></i>; // Cold
    if (weather.temperature >= 10 && weather.temperature <= 25) return <i className='bx bx-cloud weather-icon'></i>; // Warm
    return <i className='bx bx-cloud-lightning weather-icon'></i>;
  };

  return (
    <div className="sidebar">
      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search city..." 
          className="search-input" 
          value={city}
          onChange={handleSearch}
        />
        <button onClick={handleSearchClick} className="search-button">
          <i className="bx bx-search-alt-2 search-icon"></i>
        </button>
      </div>

      {/* Weather Info */}
      <div className="weather-info">
        {weather ? (
          <>
            {getWeatherIcon()}
            <p className="temperature">Feels like {weather.temperature_display}</p>
            <p className="weather-description">{weather.weather}</p>
            <p className="day">{weather.date_time}</p>
            <p className="location-place">{weather.city}, {weather.country}</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
