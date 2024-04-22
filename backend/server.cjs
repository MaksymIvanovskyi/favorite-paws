const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const PORT = 5000;

const mongoClient = new MongoClient('mongodb+srv://MaxHumeniuk:max556644332211@cluster.jogtiso.mongodb.net/restaurants');

async function connect() {
    try {
        await mongoClient.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/places', async (req, res) => {
    try {
        const db = mongoClient.db(); 
        const collection = db.collection('restaurantsCollection'); 
        const places = await collection.find({}).toArray(); 
        res.json(places); 
    } catch (err) {
        console.error('Error fetching places:', err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
