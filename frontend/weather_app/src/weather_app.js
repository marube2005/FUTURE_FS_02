import React from 'react';

const WeatherCard = ({ day, temp, icon, description }) => {
  return (
    <div className="bg-blue-300 rounded-lg p-4 flex flex-col items-center">
      <i className="bx bx-cloud" style={{ fontSize: '4rem' }}></i>
      <p className="text-lg font-bold">{day}</p>
      <p>{temp}°C</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WeatherCard;
