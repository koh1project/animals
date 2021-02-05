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

    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAddIconHandler = () => {
    getData();

    // setPromise(ADDITIONAL_TEST_DATA).then((res) => {
    //   const currentShibes = shibes.slice(0, shibes.length);
    //   const shibeResponse = res as string[];
    //   setShibes([...currentShibes, ...shibeResponse]);
    //   setLoading(false);
    // });
  };

  const getData = () => {
    setLoading(true);
    axios
      .get(`${URL}?count=${count}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then((res) => {
        const currentShibes = shibes.slice();
        const shibeResponse: string[] = res.data;
        setShibes([...currentShibes, ...shibeResponse]);
        setLoading(false);
      });
  }

  let collection =
    loading && shibes.length === 0 ? (
      <Spinner />
    ) : (
      <Collection urlList={shibes} clicked={setBigPicture} onClickAddIcon={onClickAddIconHandler} loading={loading} />
    );

  return (
    <div
      className="App"
      data-test="component-app"
    >
      <Header data-test="" />
      <BigPicture url={bigPicture} />
      {collection}
    </div>
  );
};

export default App;

// const TEST_DATA = [
//   'https://cdn.shibe.online/shibes/1a7c9efda116e9fe025bbc3f40ba9885de7a25a9.jpg',
//   'https://cdn.shibe.online/shibes/989228fb3aca83943953ba8e90ea706b600adc56.jpg',
//   'https://cdn.shibe.online/shibes/dece19c0c5a9a5eb3b389c469650c65fadf22bff.jpg',
//   'https://cdn.shibe.online/shibes/f11a356c6d07036b958ddba2830a28c6429200d9.jpg',
//   'https://cdn.shibe.online/shibes/160e9a46408b7e7fc1b59526de141b902dfa5772.jpg',
//   'https://cdn.shibe.online/shibes/8752a6d81e40db7786c41f55742eaf64ee918635.jpg',
//   'https://cdn.shibe.online/shibes/ce05902807bdd28aee183eda8d9ab72f064c2864.jpg'
// ];

// const ADDITIONAL_TEST_DATA = [
//   'https://cdn.shibe.online/shibes/c6241f4dd2eb836c63732439ba745f854061dcf5.jpg',
//   'https://cdn.shibe.online/shibes/801f42f44621b77caf417821f4e72a9a0b3bbfe0.jpg',
//   'https://cdn.shibe.online/shibes/993f6b7dc1cf7b7aab8974aa732e72b3fc851361.jpg',
//   'https://cdn.shibe.online/shibes/1a8e5c2ac13e7d4a70bad4c2dc7a648b7d7717a6.jpg',
//   'https://cdn.shibe.online/shibes/e19e8989e1be97a458ed0e540ae0ce8d86638261.jpg',
//   'https://cdn.shibe.online/shibes/953b862bcc620e0c705045c6b0a2d9e62acd81b3.jpg',
//   'https://cdn.shibe.online/shibes/08eac7d81f6d7e7f4ed9746f61c1357b23fdb4dd.jpg',
//   'https://cdn.shibe.online/shibes/f6022052f809d57e7314fc8e2f85796378d064f7.jpg',
//   'https://cdn.shibe.online/shibes/c10f14e09272bd6366429dc31fae5a0764dd0882.jpg'
// ];

// const setPromise = (data: string[]) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 500);
//   });
// };
