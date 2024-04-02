import React from 'react';
import Pet from '../assets/kapybara.jpg';
import arrowImage from '../assets/paw-icon.png'; 
import Dog from '../assets/dog.jpg';
import Monkey from '../assets/monkey.jpg';
import Duck from '../assets/duck.jpg';
import LazyDog from '../assets/lazy-dog.jpg';
import Sugar from '../assets/sugar.jpg';
import Sowa from '../assets/sowa.jpg';
import CatCafe from '../assets/cat-cafe.jpg';
import GrandCafe from '../assets/grand-cafe.jpg';
import BerNarDyn from '../assets/ber-nar-dyn.jpg';
import Akvarel from '../assets/akvarel.jpg';
import CraftKumpel from '../assets/craft-kumpel.jpg';
import LvivManufaktura from '../assets/lviv-manufaktura.jpg';
import BurhlyviOplisky from '../assets/burhlyvi-oplisky.jpg';
import Valentino from '../assets/valentino.jpg';
import MrsGreenwich from '../assets/mrs-greenwich.jpg';
import NaVirmenskiy from '../assets/na-virmenskiy.jpg';
import Papi from '../assets/papi.jpg';
import MoreRyby from '../assets/more-ryby.jpg';
import EpicCheeseburger from '../assets/epic-cheeseburger.jpg';
import CukorBlack from '../assets/cukor-black.jpg';
import Teddy from '../assets/teddy.jpg';

const establishments = [
  
  {
    "id": 3,
    "name": "Dogs like ducks",
    "description": "🌱 107% веганські хот-доги 🌭📍 вул. Ковжуна, 6, м. Львів 🇺🇦🛒 Веган-маркет 🎁   Instagram: @dogslikeducks",
    "rating": 4,
    "image": "duck.jpg"
  },
  {
    "id": 4,
    "name": "Лінивий пес",
    "description": "A cozy pet-friendly cafe with a relaxing atmosphere.",
    "rating": 4.5,
    "image": "lazy-dog.jpg"
  },
  {
    "id": 5,
    "name": "Цукор",
    "description": "A pet-friendly cafe offering sweet treats and drinks.",
    "rating": 4,
    "image": "sugar.jpg"
  },
  {
    "id": 6,
    "name": "Sowa",
    "description": "A pet-friendly restaurant serving delicious dishes in a cozy setting.",
    "rating": 4.5,
    "image": "sowa.jpg"
  },
  {
    "id": 7,
    "name": "Cat Cafe Lviv",
    "description": "A pet-friendly cafe where you can enjoy coffee surrounded by friendly cats.",
    "rating": 5,
    "image": "cat-cafe.jpg"
  },
  {
    "id": 8,
    "name": "Grand cafe leopolis",
    "description": "A pet-friendly cafe with a charming atmosphere and tasty food.",
    "rating": 4.5,
    "image": "grand-cafe.jpg"
  },
  {
    "id": 9,
    "name": "BER NAR DYN Restaurant",
    "description": "A pet-friendly restaurant offering a wide range of dishes and drinks.",
    "rating": 4,
    "image": "ber-nar-dyn.jpg"
  },
  {
    "id": 10,
    "name": "Ресторан «Акварель»",
    "description": "A pet-friendly restaurant with a beautiful water-themed decor.",
    "rating": 4.5,
    "image": "akvarel.jpg"
  },
  {
    "id": 11,
    "name": "Craft & Kumpel’ Beer Atelier",
    "description": "A pet-friendly beer atelier offering craft beers and tasty snacks.",
    "rating": 4,
    "image": "craft-kumpel.jpg"
  },
  {
    "id": 12,
    "name": "Львівська Мануфактура кави",
    "description": "A pet-friendly coffee shop with a cozy atmosphere and freshly brewed coffee.",
    "rating": 5,
    "image": "lviv-manufaktura.jpg"
  },
  {
    "id": 13,
    "name": "Довгі бурхливі оплески",
    "description": "A pet-friendly bar with a lively atmosphere and refreshing drinks.",
    "rating": 4.5,
    "image": "burhlyvi-oplisky.jpg"
  },
  {
    "id": 14,
    "name": "Ресторан \"Valentino/Валентино\"",
    "description": "A pet-friendly restaurant offering a romantic setting and delicious Italian cuisine.",
    "rating": 4,
    "image": "valentino.jpg"
  },
  {
    "id": 15,
    "name": "Ресторан \"Mrs.Greenwich\"",
    "description": "A pet-friendly restaurant with a cozy ambiance and a variety of dishes.",
    "rating": 4.5,
    "image": "mrs-greenwich.jpg"
  },
  {
    "id": 16,
    "name": "Ресторан \"Na Virmenskiy\"",
    "description": "A pet-friendly restaurant serving traditional Ukrainian cuisine in a historic setting.",
    "rating": 4,
    "image": "na-virmenskiy.jpg"
  },
  {
    "id": 17,
    "name": "Ресторан \"Papi\"",
    "description": "A pet-friendly restaurant offering Mediterranean cuisine and a welcoming atmosphere.",
    "rating": 4.5,
    "image": "papi.jpg"
  },
  {
    "id": 18,
    "name": "Ресторан \"МОРЕ РИБИ\"",
    "description": "A pet-friendly seafood restaurant with a wide selection of fresh fish dishes.",
    "rating": 4,
    "image": "more-ryby.jpg"
  },
  {
    "id": 19,
    "name": "Ресторан \"Epic Cheeseburger\"",
    "description": "A pet-friendly restaurant known for its delicious cheeseburgers and casual atmosphere.",
    "rating": 4.5,
    "image": "epic-cheeseburger.jpg"
  },
  {
    "id": 20,
    "name": "Ресторан \"Cukor Black\"",
    "description": "A pet-friendly restaurant offering gourmet cuisine and a stylish ambiance.",
    "rating": 4,
    "image": "cukor-black.jpg"
  },
  {
    "id": 21,
    "name": "Ресторан \"Teddy\"",
    "description": "A pet-friendly restaurant with a cozy atmosphere and friendly staff.",
    "rating": 4.5,
    "image": "teddy.jpg"
  }
];

const EstablishmentCard = ({ establishment }) => (
  <div className="relative mb-8 rounded-2xl p-6" style={{ backgroundColor: '#e89a6d', hover: { backgroundColor: '#7b492b' } }}>
    <div className="flex">
      <img src={establishment.image} className="w-64 h-64 mr-8 rounded-md" />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">{establishment.name}</h2>
        <p className="text-[#572b11]">{establishment.description}</p>
        <a href="/another-page" className="mt-auto">
          <img src={arrowImage} alt="Arrow" className="w-12 h-12 absolute bottom-4 right-4" style={{ filter: 'brightness(150%)' }} />
        </a>
      </div>
    </div>
  </div>
);



const PetFriendlyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        {establishments.map(establishment => (
          <EstablishmentCard key={establishment.id} establishment={establishment} />
        ))}
      </div>
    </div>
  );
};

export default PetFriendlyPage;