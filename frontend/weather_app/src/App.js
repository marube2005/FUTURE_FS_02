import './App.css';
import WeatherCard from './weather_app';
import Sidebar from './sidebar';
// import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="App">
      <h1> Hello World </h1>
      <WeatherCard />
      <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl">Weather Dashboard</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
