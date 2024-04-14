import React from 'react';
import 'tailwindcss/tailwind.css';

const contact1 = {
  name: "Івановський Максим",
  image: "/contact1.jpg",
  phone: "+380988083435",
  email: "Max7ioy7@gmail.com"
};

const contact2 = {
  name: "Гуменюк Максим",
  image: "/assets/Hum.jpg",
  phone: "+380687195944",
  email: "maxhumeniuk321@gmail.com"
};

const contact3 = {
  name: "Анастасія Новосад",
  image: "/contact2.jpg",
  phone: "+380684534568",
  email: "nast127ia@gmail.com"
};

const contact4 = {
  name: "Теглівець Соломія",
  image: "/contact2.jpg",
  phone: "+380960018677",
  email: "solomiateglivec7@gmail.com"
};

const contact5 = {
  name: "Замойська Наталія",
  image: "/contact2.jpg",
  phone: "+380733278685",
  email: "natalizam1315@gmail.com"
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Контактна інформація</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <div className="flex flex-col items-center">
          <img src={contact1.image} alt={contact1.name} className="w-40 h-40 mb-4" />
          <p className="text-gray-600 mb-2">{contact1.phone}</p>
          <p className="text-gray-600 mb-2">{contact1.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={contact2.image} alt={contact2.name} className="w-40 h-40 mb-4" />
          <p className="text-gray-600 mb-2">{contact2.phone}</p>
          <p className="text-gray-600 mb-2">{contact2.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={contact3.image} alt={contact3.name} className="w-40 h-40 mb-4" />
          <p className="text-gray-600 mb-2">{contact3.phone}</p>
          <p className="text-gray-600 mb-2">{contact3.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={contact4.image} alt={contact4.name} className="w-40 h-40 mb-4" />
          <p className="text-gray-600 mb-2">{contact4.phone}</p>
          <p className="text-gray-600 mb-2">{contact4.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={contact5.image} alt={contact5.name} className="w-40 h-40 mb-4" />
          <p className="text-gray-600 mb-2">{contact5.phone}</p>
          <p className="text-gray-600 mb-2">{contact5.email}</p>
        </div>
      </div>
    </div>
  );
}
