import React from 'react';
import BigPictureStyled from './BigPicture.styles';

import urlProps from '../../interfaces/urlPropType';

const BigPicture = ({ url }: urlProps) => <BigPictureStyled src={url}></BigPictureStyled>;

export default BigPicture;
