import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';
import { findByTestAttr } from '../testUtils';

const setup = () => shallow(<Spinner />);

const wrapper = setup();

test('renders spinner', () => {
  const spinnerComponent = findByTestAttr(wrapper, 'component-spinner');
  expect(spinnerComponent.length).toBe(1);
});
