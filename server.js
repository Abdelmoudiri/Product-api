const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Chargement du fichier db.json
const produits = require('./db.json');

// Définir un point d'API pour récupérer les produits
app.get('/api/produits', (req, res) => {
  res.json(produits);
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
