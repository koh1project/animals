import React, { FC } from 'react';

import { SvgContainer, SvgImage } from './AddCircleIcon.styles';

const AddCircleIcon: FC = () => (
  <SvgContainer>
    <SvgImage
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      style={{ position: 'relative' }}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </SvgImage>
  </SvgContainer>
);

export default AddCircleIcon;
