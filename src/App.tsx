import { FC, useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import Collection from './containers/Collection/Collection';
import BigPicture from './containers/BigPicture/BigPictureContainer';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

const URL = 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes';

const count = 10;

const App: FC = () => {
  const [shibes, setShibes] = useState<string[]>([]);
  const [bigPicture, setBigPicture] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

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
        setLoading(false);
      });
  }, []);

  let collection = loading ? <Spinner /> : <Collection urlList={shibes} clicked={setBigPicture} />;

  return (
    <div
      className="App"
      data-test="component-app"
      onScrollCapture={(evt: any) => {
        console.log(evt.target);
      }}
    >
      <Header data-test="" />
      <BigPicture url={bigPicture} />
      {collection}
    </div>
  );
};

export default App;
