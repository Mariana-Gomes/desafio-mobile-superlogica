import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './assets/styles/colors';

import HomeScreen from './views/Home'
import CharactersScreen from './views/Characters'
const Stack = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="Characters" 
        component={CharactersScreen}
        options={{
          title: 'Character',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
