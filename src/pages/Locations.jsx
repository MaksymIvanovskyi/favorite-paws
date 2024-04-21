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
    <div>
      <h1> </h1>
      {places.map(place => (
        <div key={place.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', position: 'relative' }}>
          <img src={place.image} alt={place.name} style={{ width: '100px', height: '100px' }} />
          <div style={{ marginLeft: '120px' }}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
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
