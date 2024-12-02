// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');  // Middleware pour gérer le CORS

const app = express();

// Configuration CORS pour autoriser les requêtes du frontend
app.use(cors());

// Route API qui renvoie des données au frontend
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Démarrage du serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
