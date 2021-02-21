import React, { ComponentClass } from 'react';

import { shallow } from 'enzyme';
import Collection, { collectionProps } from '../../containers/Collection/Collection';
import { findByTestAttr } from '../testUtils';

const testProps: collectionProps = {
  urlList: [''],
  clicked: () => {},
  onClickAddIcon: () => {},
  loading: true
};
const setup = () => shallow(<Collection {...testProps} />);

interface TestWrapper extends ComponentClass {
  target: string;
}

describe('renders Collection container without errors', () => {
  test('does not throw an error', () => {
    const wrapper = setup();
    const collectionContainer = findByTestAttr(wrapper, 'container-collection');
    expect(collectionContainer.length).toBe(1);
  });
});
