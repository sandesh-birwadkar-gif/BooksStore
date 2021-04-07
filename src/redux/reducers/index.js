import {combineReducers} from 'redux';
import {bookReducer} from './bookReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartData'],
};

const reducers = combineReducers({
  booksCollection: persistReducer(persistConfig, bookReducer),
});

export default reducers;
