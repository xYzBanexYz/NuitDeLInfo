import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  // Effect pour récupérer les données depuis l'API Express
  useEffect(() => {
    fetch('http://localhost:5000/api/data')  // Assure-toi que l'URL correspond à ton backend
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from Express API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;
