import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import CollectionShibes from './containers/CollectionShibes/CollectionShibes';
import BigPicture from './containers/BigPicture/BigPicture';

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
      <BigPicture url="https://cdn.shibe.online/shibes/77e87b281a58049bcaa7ebdf8e6cd8f2605ad6f7.jpg" />
      <CollectionShibes urlList={shibes} />
    </div>
  );
};

export default App;
