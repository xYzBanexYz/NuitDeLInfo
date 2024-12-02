const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nuitdelinfo',
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err);
  } else {
    console.log('Connexion à la base de données MySQL réussie');
  }
});

module.exports = connection;
