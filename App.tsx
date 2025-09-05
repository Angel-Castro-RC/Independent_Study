// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://127.0.0.1:8000/api/data/')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app-container">
      <h1>Wellness Website</h1>
      <p>This is a sample wellness app built with React and Django.</p>
      <div className="data-display">
        {data ? <p>Message from backend: {data}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
