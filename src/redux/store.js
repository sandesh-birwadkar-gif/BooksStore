import {createStore} from 'redux';
import reducers from './reducers';
import {persistStore} from 'redux-persist';

const store = createStore(reducers, {});
export const persistor = persistStore(store);

export default store;
