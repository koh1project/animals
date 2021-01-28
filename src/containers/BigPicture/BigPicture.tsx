import React from 'react';
import { BigPictureStyled, EmptyBigPictureStyled } from './BigPicture.styles';

import urlProps from '../../interfaces/urlPropType';

const BigPicture = ({ url }: urlProps) => {
  return url ? (
    <BigPictureStyled data-test="component-bigPicture" src={url}></BigPictureStyled>
  ) : (
    <EmptyBigPictureStyled data-test="component-bigPicture"></EmptyBigPictureStyled>
  );
};

export default BigPicture;
