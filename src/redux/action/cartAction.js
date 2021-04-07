import {ActionTypes} from '../constants/action-types';

export const addToremove = item => {
  return {
    type: ActionTypes.ADD_TO_REMOVE,
    payload: item.id,
  };
};
