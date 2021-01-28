import React, { ComponentClass } from 'react';

import { shallow } from 'enzyme';
import BigPicture from '../../containers/BigPicture/BigPicture';
import { findByTestAttr } from '../testUtils';

const setup = (url = '') => shallow(<BigPicture url={url} />);

interface TestWrapper extends ComponentClass {
  target: string;
}

describe('renders BigPicture without errors', () => {
  test('should renders with empty url', () => {
    const wrapper = setup();
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bigPicture');

    expect(bigPictureComponent.length).toBe(1);
    expect((bigPictureComponent.type() as TestWrapper).target).toEqual('div');
  });
  test('should renders with valid url', () => {
    const wrapper = setup('http://localhost:3000');
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bigPicture');

    expect(bigPictureComponent.length).toBe(1);
  });
});

describe('renders certain element', () => {
  test.only('should be div element with empty url', () => {
    const wrapper = setup();
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bigPicture');
    expect((bigPictureComponent.type() as TestWrapper).target).toBe('div');
  });
  test.only('should be img element with valid url', () => {
    const wrapper = setup('http://localhost:3000');
    const bigPictureComponent = findByTestAttr(wrapper, 'component-bigPicture');
    expect((bigPictureComponent.type() as TestWrapper).target).toBe('img');
  });
});
