import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import colors from './src/assets/styles/colors'

import MainRoute from './src/routes';
import { Store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={colors.primary}/>
      <MainRoute />
    </NavigationContainer>
    </Provider>
  );
}
