/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider as MobxProvider } from "mobx-react";
import React from 'react';
import drinkStore from './mobx/DrinkStore';
import AppNavigator from './router/index';

const App = () => {
  return (
    <MobxProvider
      drinkStore={drinkStore}>
      <AppNavigator />
    </MobxProvider>
  )
}

export default App;