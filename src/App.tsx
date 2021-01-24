import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import CollectionShibes from './containers/CollectionShibes';

const URL = 'https://shibe.online/api/shibes';

const count = 15;

const App = () => {
  const [shibes, setShibes] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${URL}?count=${count}`).then((res) => {
      const shibeResponse: string[] = res.data;
      setShibes(shibeResponse);
    });
  }, []);

  return (
    <div className="App">
      <CollectionShibes urlList={shibes} />
      {shibes.map((shibe) => (
        <div key={shibe}>{shibe}</div>
      ))}
    </div>
  );
};

export default App;
