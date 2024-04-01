import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Імпорт компонента Link
import restaurantsData from '../assets/restourants.json'; 
import pawIcon from '../assets/paw_icon.png';

const PetFriendlyPage = ({ nav }) => { // Передаємо змінну nav як пропс
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    setEstablishments(restaurantsData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Pet-Friendly Establishments</h1>
      <div className="flex flex-wrap">
        {establishments.map(establishment => (
          <div key={establishment.id} className="w-full md:w-1/2 lg:w-1/2 pr-4 relative"> {/* Додано relative */}
            <div className="border p-4 rounded-md mb-4">
              <h2 className="text-lg font-semibold">{establishment.name}</h2>
              <p className="text-gray-600">{establishment.description}</p>
              <img src={`../assets/images/${establishment.image}`} alt={establishment.name} className="mt-4 rounded-md" />
              
              {/* Кнопка для переходу на сторінку з повним описом закладу */}
              <Link to={`/establishment/${establishment.id}`} className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                {/* Вставте вашу логіку тут */}
                {nav ? <img src={pawIcon} alt="Open Menu" className="w-6 h-6"/> : <>&gt;</>}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetFriendlyPage;
