import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import CollectionShibes from './containers/CollectionShibes/CollectionShibes';
import BigPicture from './containers/BigPicture/BigPictureContainer';
import Header from './components/Header/Header';

const URL = 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes';

const count = 40;

const App = () => {
  const [shibes, setShibes] = useState<string[]>([]);
  const [bigPicture, setBigPicture] = useState<string>('');

  useEffect(() => {
    axios
      .get(`${URL}?count=${count}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then((res) => {
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
