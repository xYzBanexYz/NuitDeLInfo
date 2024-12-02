const connection = require('../config/database');

const getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { getUsers };
