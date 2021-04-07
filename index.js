import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import App from '@src/App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store.js';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
