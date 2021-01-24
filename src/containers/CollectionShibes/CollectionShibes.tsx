import React from 'react';

import { CollectionShibes, ShibeItem } from './CollectionShibes.styles';

interface collectionShibesProps {
  urlList: string[];
}

const collectionShibes = (props: collectionShibesProps) => (
  <CollectionShibes cellHeight={500} cols={3}>
    {props.urlList.map((url) => (
      <ShibeItem key={url} onClick={() => console.log(url)} cols={1}>
        <img src={url} alt="Shibe" />
      </ShibeItem>
    ))}
  </CollectionShibes>
);

export default collectionShibes;
