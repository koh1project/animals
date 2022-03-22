import { FC, useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

import Collection from './containers/Collection/Collection';
import BigPicture from './containers/BigPicture/BigPictureContainer';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

import getDataFromStaticAssets from './resources/staticData';

const URL = 'https://dog.ceo/api/breeds/image/random';

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

  const getData = async () => {
    setLoading(true);
    let shibeResponse;
    const currentShibes = shibes.slice();

    try {
      shibeResponse = (await (await fetch(`${URL}/${countLoadingOnce}`)).json()).message;
      setShibes([...currentShibes, ...shibeResponse]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      // エラー発生時は予めストックしているURLを使用する
      shibeResponse = await getDataFromStaticAssets(countLoadingOnce, shibes.length);

      setShibes([...currentShibes, ...shibeResponse]);
      setLoading(false);
    }
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
