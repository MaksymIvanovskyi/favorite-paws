import { useEffect, useState } from 'react';
import establishmentsData from '../assets/esteblishment.json';

export default function Grandcafeleopolis() {
  const [establishment, setEstablishment] = useState(null);

  useEffect(() => {
    // Знайдемо заклад "Dogs Like Ducks" у списку та встановимо його в стан
    const foundEstablishment = establishmentsData.find(est => est.name === 'Grand cafe leopolis');
    setEstablishment(foundEstablishment);
  }, []);

  if (!establishment) {
    return null; // Якщо заклад не знайдено, повертаємо null
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="relative mb-8 rounded-2xl p-6 bg-white border-2 border-gray-400">
        <img src={establishment.duck} className="w-64 h-64 mr-8 rounded-md" alt={establishment.name} />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{establishment.name}</h2>
          <p className="text-brown">{establishment.description}</p>
        </div>
      </div>
    </div>
  );
  
  
  
}