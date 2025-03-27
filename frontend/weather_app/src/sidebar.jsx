import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-300 p-4 flex flex-col items-center">
      {/* Search Bar */}
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Search city..."
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Weather Icon & Temp */}
      <div className="flex flex-col items-center">
        <i className="bx bx-cloud text-6xl text-white"></i>
        <p className="text-4xl font-bold text-white">34°C</p>
        <p className="text-white">Few Clouds</p>
      </div>

      {/* Menu */}
      <div className="mt-8 w-full flex flex-col space-y-4">
        <button className="w-full text-left p-2 bg-blue-400 rounded-md text-white hover:bg-blue-500">
          Home
        </button>
        <button className="w-full text-left p-2 bg-blue-400 rounded-md text-white hover:bg-blue-500">
          Forecast
        </button>
        <button className="w-full text-left p-2 bg-blue-400 rounded-md text-white hover:bg-blue-500">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
