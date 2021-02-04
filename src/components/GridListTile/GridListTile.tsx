import React from 'react';
import { CollectionItem } from './GridListTile.styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: HTMLElement) => (
  <React.Fragment>
    <CollectionItem>{props.children}</CollectionItem>
  </React.Fragment>
);
