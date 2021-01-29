import React, { ComponentClass } from 'react';

import { shallow } from 'enzyme';
import BigPicture from '../../containers/BigPicture/BigPictureContainer';
import { findByTestAttr } from '../testUtils';

const setup = (url = '') => shallow(<BigPicture url={url} />);

interface TestWrapper extends ComponentClass {
  target: string;
}

describe('renders BigPicture container without errors', () => {
  test('does not throw an error with empty url', () => {
    const wrapper = setup();
    const bigPictureComponent = findByTestAttr(wrapper, 'container-bigPicture');
    expect((bigPictureComponent.type() as TestWrapper).target).toBe('div');
  });
  test('does not throw an error with valid url', () => {
    const wrapper = setup('http://localhost:3000');
    const bigPictureComponent = findByTestAttr(wrapper, 'container-bigPicture');
    expect((bigPictureComponent.type() as TestWrapper).target).toBe('div');
  });
});
