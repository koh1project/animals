import React from 'react';

import { CollectionShibes } from './CollectionShibes.styles';

import { GridList, GridListTile } from '@material-ui/core';

interface collectionShibesProps {
  urlList: string[];
}

const collectionShibes = (props: collectionShibesProps) => (
  <CollectionShibes>
    <GridList cellHeight={500} cols={3}>
      {props.urlList.map((url) => (
        <GridListTile key={url} onClick={() => console.log(url)} cols={1}>
          <img src={url} alt="Shibe" />
        </GridListTile>
      ))}
    </GridList>
  </CollectionShibes>
);

export default collectionShibes;
