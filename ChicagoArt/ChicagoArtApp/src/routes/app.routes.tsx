import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { ArtDetails } from '../pages/ArtDetails';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ArtDetails" component={ArtDetails} />
    </Stack.Navigator>
  );
}
