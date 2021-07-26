import React from 'react';
import axios from 'axios';
import {StyleSheet,View,Text} from 'react-native';

const PokemonDetailScreen=(props)=> {    

    const pokemon=props.route.params.pokemon;
    console.log(pokemon);
    axios.get(pokemon.url)
    .then((response)=>{
      console.log(response);
    })
    .catch(function (err) {
        failCallback(err);
      });
        return (
            
            <View>
                <Text>{}</Text>
            </View>
        );
    
        
    }
    
    
export default PokemonDetailScreen;