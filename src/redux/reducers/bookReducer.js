import {ActionTypes} from '../constants/action-types';
import {booksData} from '../../utils/Data';
import {Toast} from '../../utils/helper';

const initialState = {
  books: booksData,
  cartData: [],
};

export const bookReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      let checkItemInCart = state.cartData.find(item => item.id === payload.id);
      if (checkItemInCart == undefined) {
        Toast('Added to Shopping Cart');
        return {...state, cartData: [payload, ...state.cartData]};
      } else {
        Toast('Book already added in cart');
      }

    case ActionTypes.ADD_TO_REMOVE:
      const filtered = state.cartData.filter(cart => cart.id !== payload);
      return {
        ...state,
        cartData: filtered,
      };
    default:
      return state;
  }
};
