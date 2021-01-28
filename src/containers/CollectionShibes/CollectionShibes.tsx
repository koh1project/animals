import React from 'react';

import { CollectionShibesContainer, ShibeItem } from './CollectionShibes.styles';

interface collectionShibesProps {
  urlList: string[];
  clicked: Function;
}

const CollectionShibes = ({ urlList, clicked }: collectionShibesProps) => (
  <CollectionShibesContainer cellHeight={500} cols={3}>
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
  </CollectionShibesContainer>
);

export default CollectionShibes;
