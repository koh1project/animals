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
const setup = (props = testProps) => shallow(<Collection {...props} />);

interface TestWrapper extends ComponentClass {
  target: string;
}

describe('renders Collection container without errors', () => {
  test('does not throw an error', () => {
    const wrapper = setup();
    const collectionContainer = findByTestAttr(wrapper, 'container-collection');
    expect(collectionContainer.length).toBe(1);
  });
  test('renders with CollectionItem', () => {
    const props = {
      urlList: ['https://cdn.shibe.online/shibes/989228fb3aca83943953ba8e90ea706b600adc56.jpg'],
      clicked: () => {},
      onClickAddIcon: () => {},
      loading: true
    };
    const wrapper = setup(props);
    const collectionItem = findByTestAttr(wrapper, 'component-collectionItem');
    expect(collectionItem.length).toBe(1);
  });
});
