import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet, View, Text, Image} from 'react-native';
import styles from './PokemonDetailScreen.style.js';

const PokemonDetailScreen = props => {
  const pokemon = props.route.params.pokemon;

  return (
    <View>
      <Image
        source={{
          uri: pokemon.image,
        }}
        style={styles.pokeImageStyle}></Image>
      <Text style={styles.baseText}>
        {'Base experience\n'}
        <Text style={styles.innerText}>{pokemon.baseExperience}</Text>
      </Text>
      <Text style={styles.baseText}>
        {'Version Name\n'}
        <Text style={styles.innerText}>{pokemon.versionName}</Text>
      </Text>
      <Text style={styles.baseText}>
        {'Ability Name\n'}
        <Text style={styles.innerText}>{pokemon.abilityName}</Text>
      </Text>
    </View>
  );
};

export default PokemonDetailScreen;
