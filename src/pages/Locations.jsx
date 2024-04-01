import React from 'react';
import Pet from '../assets/kapybara.jpg' ;
import arrowImage from '../assets/paw-icon.png'; // Import the arrow image
import Dog from '../assets/dog.jpg' ;
import Monkey from '../assets/monkey.jpg' ;

const establishments = [
  {
    id: 1,
    name: "Pet Paradise",
    description: "A cozy pet-friendly cafe with outdoor seating.",
    rating: 4,
    image: Pet
  },
  {
    id: 2,
    name: "Paws & Relax",
    description: "A pet-friendly hotel with spacious rooms and a play area.",
    rating: 5,
    image: Dog
  },
  {
    id: 3,
    name: "Bark 'n' Brews",
    description: "A pet-friendly bar with a wide selection of drinks and a dog park.",
    rating: 4.5,
    image: Monkey
  }
];

const EstablishmentCard = ({ establishment }) => (
  <div className="flex mb-4 rounded-2xl" style={{ backgroundColor: '#824421 hover:bg-[#7b492b]' }}>
    <img src={establishment.image} alt={establishment.name} className="w-24 h-24 mr-4 rounded-md" />
    <div className="rounded-2xl flex flex-col justify-between">
      <div className="rounded-2xl flex items-center mb-2">
        <span className="text-xl mr-2">{establishment.rating}</span>
        {[...Array(Math.floor(establishment.rating))].map((_, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-2">{establishment.name}</h2>
      <p className="text-gray-600">{establishment.description}</p>
    </div>
    <a href="/another-page" className="ml-auto">
      <img src={arrowImage} alt="Arrow" className="w-8 h-8 arrow-img" /> {/* Larger arrow image */}
    </a>
  </div>
);

const PetFriendlyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Pet-Friendly Establishments</h1>
      <div className="flex">
        <div className="w-1/2 pr-8">
          {establishments.map(establishment => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
        <div className="w-1/2">
          {/* Other content or components */}
        </div>
      </div>
    </div>
  );
};

export default PetFriendlyPage;
