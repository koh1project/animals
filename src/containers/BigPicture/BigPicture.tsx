import React from 'react';
import { BigPictureStyled, EmptyBigPictureStyled } from './BigPicture.styles';

import urlProps from '../../interfaces/urlPropType';

const BigPicture = ({ url }: urlProps) => {
  return url ? (
    <BigPictureStyled data-test="component-bugPicture" src={url}></BigPictureStyled>
  ) : (
    <EmptyBigPictureStyled data-test="component-bugPicture"></EmptyBigPictureStyled>
  );
};

export default BigPicture;
