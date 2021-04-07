import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookListing from './components/BookListing';
import CartScreen from './components/CartScreen';
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookListing" component={BookListing} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};
const Routes = () => {
  return <NavigationContainer>{<MainApp />}</NavigationContainer>;
};
export default Routes;
