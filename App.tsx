import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PokedexScreen from './screens/Pokedex';
import Pokemon from './screens/Pokemon';

export type RootStackParamList = {
  Home: undefined;
  Pokedex: undefined
  Pokemon: { name: string } // Pass the name of the Pokemon as a parameter
  // You can add more screens here like: RunDetails: { id: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
