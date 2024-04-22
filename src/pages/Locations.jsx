import 'tailwindcss/tailwind.css';
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Locations() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/places')
      .then(response => response.json())
      .then(data => setPlaces(data))
      .catch(error => console.error('Error fetching places:', error));
  }, []);

  const LocationsList = ({ locations }) => {
    return (
      <div>
        {locations.map(location => <LocationItem key={location.id} location={location} />)}
      </div>
    );
  };

  const [showMap, setShowMap] = useState(false);

  const Map = ({ location }) => {
    const mapRef = useRef(null);

    useEffect(() => {
      mapRef.current = L.map('map').setView([location.lat, location.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
      L.marker([location.lat, location.lng]).addTo(mapRef.current);
      return () => mapRef.current.remove();
    }, [location]);

    return <div id="map" style={{ height: '200px', width: '100%' }}></div>;
  };

  return (
    <div className="container mx-auto px-12 py-12">
      <h1> </h1>
      {places.map(place => (
        <div key={place.id} className="relative mb-6 rounded-2xl p-2 border-2 border-[#f7b95c] bg-[#f7b95c] delay-100 duration-100 transform hover:scale-105 transition ease-linear">
          <img src={place.imageUrl} alt={place.name} className="w-64 h-64 mr-8 rounded-md" />
          <div>
          <h3 className="text-2xl font-semibold mb-2 block border-b border-[#66421f]">{place.name}</h3>
            <p className="text-brown">{place.description}</p>
            <button onClick={() => setShowMap(!showMap)}>
              {showMap ? 'Hide' : 'Show'} Map
            </button>
            {showMap && <Map location={place} />}
          </div>
        </div>
      ))}
    </div>
  );
}