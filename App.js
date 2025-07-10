// App.js
import React from 'react';


import HomeScreen from './index'; // ou './app/index' se estiver numa pasta
import PescariaScreen from './PescariaScreen'; // ajuste caminho

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pescaria" component={PescariaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
