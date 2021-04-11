// import './App.css'; 
import React, { useEffect, useState } from "react"; 
// import Weather from './components/weather';
function WeatherApp() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="WeatherApp">

    </div>
  );
}
export default WeatherApp;