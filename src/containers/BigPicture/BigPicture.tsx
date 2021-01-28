import React from 'react';
import { BigPictureStyled, EmptyBigPictureStyled } from './BigPicture.styles';

import urlProps from '../../interfaces/urlPropType';

interface BigPictureProps {
  [key: string]: any;
}

const BigPicture = ({ url }: urlProps) => {
  let props: BigPictureProps = {
    'data-test': 'component-bigPicture'
  };
  if (url) {
    props.src = url;
  }

  return url ? (
    <BigPictureStyled {...props}></BigPictureStyled>
  ) : (
    <EmptyBigPictureStyled {...props}></EmptyBigPictureStyled>
  );
};

export default BigPicture;
