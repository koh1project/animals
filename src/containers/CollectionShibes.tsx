import React from 'react';

import ShibeItem from '../components/ShibeItem/ShibeItem';
import { CollectionShibes } from './CollectionShibes.styles';


interface collectionShibesProps {
  urlList: string[];
}

const collectionShibes = (props: collectionShibesProps) => (
  <CollectionShibes>
    {props.urlList.map((url) => (
      <ShibeItem url={url} />
    ))}
  </CollectionShibes>
);

export default collectionShibes;
