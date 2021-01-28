import React from 'react';

import { shallow } from 'enzyme';
import BigPicture from '../../containers/BigPicture/BigPicture';
import { findByTestAttr } from '../testUtils';

const setup = (url = '') => shallow(<BigPicture url={url} />);

describe('renders BigPicture without errors', () => {
  test('should renders with empty url', () => {
    const wrapper = setup();
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bugPicture');

    expect(bigPictureComponent.length).toBe(1);
  });
  test('should renders with empty valid', () => {
    const wrapper = setup('http://localhost:3000');
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bugPicture');

    expect(bigPictureComponent.length).toBe(1);
  });
});
