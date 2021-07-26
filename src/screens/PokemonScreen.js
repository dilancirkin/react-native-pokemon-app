import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import PokemonList from '../components/PokemonList';


function PokemonScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <PokemonList navigation={navigation}/>
      </View>
    );
  }
export default PokemonScreen;