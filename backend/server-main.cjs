
const express = require('express');
const app = express();
const PORT = 5000;

// Mock data
const places = [
  {
      id: 1,
      name: "Central Park",
      description: "A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/800px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg",
      latitude: 40.785091,
      longitude: -73.914285,
      mapUrl: "https://woody.cloudly.space/app/uploads/nancy/2019/01/place-stanislas-002-andre-thomas-1920x960.jpg",
      rating: 4.5
  },
  {
    id: 2,
    name: "Middle Park",
    description: "A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/800px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg",
    latitude: 40.785091,
    longitude: -73.968285,
    mapUrl: "https://woody.cloudly.space/app/uploads/nancy/2019/01/place-stanislas-002-andre-thomas-1920x960.jpg",
    rating: 4.5
},
{
  id: 3,
  name: "Bottom Park",
  description: "A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.A large city park that's perfect for pets.",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/800px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg",
  latitude: 40.785091,
  longitude: -73.968285,
  mapUrl: "https://woody.cloudly.space/app/uploads/nancy/2019/01/place-stanislas-002-andre-thomas-1920x960.jpg",
  rating: 4.5
}
];


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/places', (req, res) => {
    res.json(places);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
