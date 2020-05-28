import reducer from '../../reducers';
import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('addToCart', () => {
    const initialState = {
      cart: [],
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, actions.addToCart(ProductMock))).toEqual(expected);
  });
});
