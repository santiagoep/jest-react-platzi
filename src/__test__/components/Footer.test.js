import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render of Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render of title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Test footer ui', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
