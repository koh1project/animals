import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';
import { findByTestAttr } from '../testUtils';

const setup = () => shallow(<Header />);

describe('renders header without errors', () => {
  const wrapper = setup();

  test('renders header div', () => {
    const headerComponent = findByTestAttr(wrapper, 'component-header');
    expect(headerComponent.length).toBe(1);
  });

  test('renders header', () => {
    const headerContainer = findByTestAttr(wrapper, 'header');
    expect(headerContainer.length).toBe(1);
  });
  test('renders appbar', () => {
    const headerAppbar = findByTestAttr(wrapper, 'header-appbar');
    expect(headerAppbar.length).toBe(1);
  });
  test('renders toolbar', () => {
    const headerToolbar = findByTestAttr(wrapper, 'header-toolbar');
    expect(headerToolbar.length).toBe(1);
  });
  test('renders typography', () => {
    const headerTypography = findByTestAttr(wrapper, 'header-typography');
    expect(headerTypography.length).toBe(1);
  });
  test('renders heading text', () => {
    const headerTypography = findByTestAttr(wrapper, 'header-typography');
    expect(headerTypography.text()).toBe('柴犬のいる暮らし');
  });
});
