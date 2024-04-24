import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapIcon from "../assets/map-icon.png";
import Map from '../components/Map.jsx'; // Змініть імпортований компонент на Map



export default function Locations() {
  const [places, setPlaces] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false); // Додали новий стан для керування анімацією

  useEffect(() => {
    fetch('http://localhost:5000/api/places')
      .then(response => response.json())
      .then(data => setPlaces(data))
      .catch(error => console.error('Помилка отримання місць:', error));

    // Установка таймера для виконання bounce кожні 60 секунд
    const intervalId = setInterval(() => {
      setIsBouncing(true); // Позначаємо, що має відбутися анімація "bounce"
      setTimeout(() => setIsBouncing(false), 1000); // Вимикаємо позначку після 1 секунди
    }, 1000); // Кожні 60 секунд

    // Прибирання таймера при виході з компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-12 py-12">
      <h1> </h1>
      {places.map(place => (
        <div key={place.id} className="relative mb-6 rounded-2xl p-2 border-2 border-[#ffcc7f] bg-[#ffcc7f] delay-100 duration-100 transform hover:scale-105 transition ease-linear">
          <div className="flex items-center">
            <img src={place.imageUrl} alt={place.name} className="w-64 h-64 mr-8 rounded-md" />
            <img src={MapIcon} alt="map-icon" className={`w-14 h-14 cursor-pointer ${isBouncing ? 'animate-bounce' : ''}`} onClick={() => setShowMap(!showMap)} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 block border-b border-[#66421f]">{place.name}</h3>
            <p className="text-brown">{place.description}</p>
            {showMap && <Map location={place} />}

          </div>
        </div>
      ))}
    </div>
  );
}
