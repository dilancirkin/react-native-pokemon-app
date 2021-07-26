import React, { Component, useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet,View,Text,Image} from 'react-native';
import styles from "./PokemonDetailScreen.style.js"


const PokemonDetailScreen=(props)=> {    
    const [pokemonDetailData, setPokemonDetailData]=useState()
useEffect(()=>{
    const pokemon=props.route.params.pokemon;
    axios.get(pokemon.url) .then((response)=>{
        const data= response.data;
        setPokemonDetailData(data)
    })
})
    return(
        <View>
            <Image source={require("../../assets/pokemon.png")} style={styles.pokeImageStyle}></Image>
            <Text style={styles.baseText}>{'Base experience\n'}<Text style={styles.innerText}>{pokemonDetailData && pokemonDetailData.base_experience}</Text></Text>
            <Text style={styles.baseText}>{'Version Name\n'}<Text style={styles.innerText}>{pokemonDetailData && pokemonDetailData.game_indices[0].version.name}</Text></Text>
            <Text style={styles.baseText}>{'Ability Name\n'}<Text style={styles.innerText}>{pokemonDetailData && pokemonDetailData.abilities[0].ability.name}</Text></Text>
        </View>
    );


}



    
export default PokemonDetailScreen;