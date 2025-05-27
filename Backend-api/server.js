const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');   
const connectDB = require('./config/db');

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
//connectDB(); 
const app = express();

// Route de test
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000; // on utilise le port du .env ou 5000 par défaut

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});