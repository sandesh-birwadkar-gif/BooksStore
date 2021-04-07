import {ActionTypes} from '../constants/action-types';

export const addTocart = data => {
  console.log('actionData', data);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: data,
  };
};
