const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Importer le package CORS
const app = express();
const port = process.env.PORT || 3000; // Render choisira automatiquement le port

// Utiliser CORS pour autoriser toutes les origines
app.use(cors());  // Cela permet à toutes les origines d'accéder à ton API

// Middleware pour indiquer que l'on va envoyer du JSON
app.use(express.json());

// Route pour récupérer tous les produits
app.get('/api/products', (req, res) => {
  // Lire le fichier db.json de manière synchrone
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      // Si une erreur se produit, renvoyer une erreur 500
      return res.status(500).json({ error: 'Impossible de lire le fichier JSON.' });
    }
    
    // Parse le JSON et renvoie les données
    const db = JSON.parse(data);
    res.json(db.produits); // On suppose que "produits" est un tableau dans db.json
  });
});

// Route pour la page d'accueil (index)
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API des montres connectées!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
