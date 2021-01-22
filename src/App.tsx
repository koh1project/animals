import React, { useEffect, useState } from 'react';
import './App.css';

// import axios from './axios';
import axios from 'axios';

const URL = 'https://shibe.online/api/shibes';

const App = () => {
  const [shibes, setShibes] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${URL}?count=2`).then((res) => {
      const shibeResponse: string[] = res.data;
      setShibes(shibeResponse);
    });
  }, []);

  return (
    <div className="App">
      {shibes.map((shibe) => (
        <div key={shibe}>{shibe}</div>
      ))}
    </div>
  );
};

export default App;
