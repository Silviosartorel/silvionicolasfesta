import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import index from './index';         // Renomeie seu código da home para esse arquivo
import PescariaScreen from './PescariaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={index} />
        <Stack.Screen name="Pescaria" component={PescariaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
