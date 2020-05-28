import React from 'react';
import { shallow, mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('render of product', () => {
    const product = shallow(
      <ProviderMock>
        <Product product={ProductMock} />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Test button of buy', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
