import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import CollectionShibes from './containers/CollectionShibes/CollectionShibes';
import BigPicture from './containers/BigPicture/BigPicture';
import Header from './components/Header/Header';

const URL = 'https://shibe.online/api/shibes';

const count = 15;

const App = () => {
  const [shibes, setShibes] = useState<string[]>([]);
  const [bigPicture, setBigPicture] = useState<string>('');

  useEffect(() => {
    axios.get(`${URL}?count=${count}`).then((res) => {
      const shibeResponse: string[] = res.data;
      setShibes(shibeResponse);
    });
  }, []);

  return (
    //@TODO: Spinner
    <div className="App" data-test="component-app">
      <Header data-test="" />
      <BigPicture url={bigPicture} />
      <CollectionShibes urlList={shibes} clicked={setBigPicture} />
    </div>
  );
};

export default App;
