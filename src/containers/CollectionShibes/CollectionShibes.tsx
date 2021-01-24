import React from 'react';

import { CollectionShibes, ShibeItem } from './CollectionShibes.styles';

interface collectionShibesProps {
  urlList: string[];
  clicked: Function;
}

const collectionShibes = ({ urlList, clicked }: collectionShibesProps) => (
  <CollectionShibes cellHeight={500} cols={3}>
    {urlList.map((url) => (
      <ShibeItem
        key={url}
        onClick={() => {
          console.log(url);
          clicked(url);
        }}
        cols={1}
      >
        <img src={url} alt="Shibe" />
      </ShibeItem>
    ))}
  </CollectionShibes>
);

export default collectionShibes;
