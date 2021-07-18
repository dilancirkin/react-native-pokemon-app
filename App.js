import 'react-native-gesture-handler';
import React from "react";
import { View,Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import PokemonScreen from './src/screens/PokemonScreen';
import PokemonDetailScreen from './src/screens/PokemonDetailScreen';

const Stack=createStackNavigator();

function App(){
  return( 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="PokemonDetailScreen" component={PokemonDetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  
   
    );

}

export default App;