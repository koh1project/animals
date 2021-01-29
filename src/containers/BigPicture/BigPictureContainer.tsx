import React from 'react';
import { BigPictureContainerStyled } from './BigPictureContainer.styles';

import urlProps from '../../interfaces/urlPropType';

interface BigPictureProps extends Record<string, string | undefined> {
  // [key: string]: any;
  'data-test': string;
  src?: string;
}

const BigPicture = ({ url }: urlProps) => {
  let props: BigPictureProps = {
    'data-test': 'component-bigPicture'
  };
  if (url) {
    props.src = url;
  }

  const content = url ? (
    // TODO: Should be a component
    <img src={url} alt="柴犬" width="100%" height="100%" />
  ) : null;

  return <BigPictureContainerStyled data-test="container-bigPicture">{content}</BigPictureContainerStyled>;
};

export default BigPicture;
