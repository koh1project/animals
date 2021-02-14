import { FC } from 'react';
import { BigPictureContainerStyled } from './BigPictureContainer.styles';

import urlProps from '../../interfaces/urlPropType';

const BigPicture: FC<urlProps> = ({ url }) => {
  const content = url ? (
    // TODO: Should be a component
    <img src={url} alt="柴犬" width="100%" height="100%" />
  ) : null;

  return <BigPictureContainerStyled data-test="container-bigPicture">{content}</BigPictureContainerStyled>;
};

export default BigPicture;
