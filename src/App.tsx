import { FC, useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import Collection from './containers/Collection/Collection';
import BigPicture from './containers/BigPicture/BigPictureContainer';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

import getDataFromStaticAssets from './resources/staticData';

const URL = 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes';
// 1回のローディングで読み込む画像件数
const countLoadingOnce = 10;

const App: FC = () => {
  const [shibes, setShibes] = useState<string[]>([]);
  const [bigPicture, setBigPicture] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAddIconHandler = () => {
    getData();
  };

  const getData = () => {
    setLoading(true);
    axios
      .get(`${URL}?count=${countLoadingOnce}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then((res) => {
        const currentShibes = shibes.slice();
        const shibeResponse: string[] = res.data;
        setShibes([...currentShibes, ...shibeResponse]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // エラー発生時は予めストックしているURLを使用する
        getDataFromStaticAssets(countLoadingOnce, shibes.length).then((res) => {
          const currentShibes = shibes.slice();
          const shibeResponse = res;
          setShibes([...currentShibes, ...shibeResponse]);
          setLoading(false);
        });
      });
  };

  const collection =
    //初回ローディングではコレクションコンテナ全体をSpinner状態にする
    loading && shibes.length === 0 ? (
      <Spinner />
    ) : (
      <Collection urlList={shibes} clicked={setBigPicture} onClickAddIcon={onClickAddIconHandler} loading={loading} />
    );

  return (
    <div className="App" data-test="component-app">
      <Header data-test="" />
      <BigPicture url={bigPicture} />
      {collection}
    </div>
  );
};

export default App;
