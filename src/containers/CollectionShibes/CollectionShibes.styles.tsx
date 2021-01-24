import styled from 'styled-components';
import { GridList, GridListTile } from '@material-ui/core';

export const CollectionShibes = styled(GridList)`
  width: 100%;
  height: 100%;
  margin: auto;

  display: 'flex';
  flex-wrap: 'wrap';
  justify-content: 'space-around';
  overflow: 'hidden';
`;

export const ShibeItem = styled(GridListTile)`
  width: 500;
  height: 450;
`;
