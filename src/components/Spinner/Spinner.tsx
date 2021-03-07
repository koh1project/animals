import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { SpinnerContainer } from './Spinner.styles';

const Spinner = () => (
  <SpinnerContainer data-test="component-spinner">
    <CircularProgress color="secondary" />
  </SpinnerContainer>
);

export default Spinner;
