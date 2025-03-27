// Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search city..." className="search-input"/>
        <i className = "bx bx-search-alt-2 search-icon"></i>
      </div>

      {/* Weather Icon & Temp */}
      <div className="weather-info">
        <i className="bx bx-cloud weather-icon"></i>
        <p className="temperature">Feels like 34°C</p>
        <p className="weather-description">Few Clouds</p>
        <p classname = "day"> Thursday, March 27 at 4:08 PM </p>
        <p classname = "location-place" >Nairobi, Kenya </p>
      </div>
    </div>
  );
};

export default Sidebar;
