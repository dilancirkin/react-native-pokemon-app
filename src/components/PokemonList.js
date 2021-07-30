import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import styles from './PokemonList.style.js';

class PokemonList extends Component {
  //extend ile react componentinin tüm özelliklerini aktardık
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    };
  }

  async componentDidMount() {
    const newData = [];

    await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(async data => {
        for (let index = 0; index < data.data.results.length; index++) {
          const element = data.data.results[index];
          await axios.get(element.url).then(data => {
            console.log(element.url);
            const item = {
              name: data.data.species.name,
              image: data.data.sprites.front_default,
              url: element.url,
            };
            newData.push(item);
          });
        }
        console.log(newData);
        this.setState({pokemonList: newData}, () => {
          console.log('ee: ', this.state.pokemonList);
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  renderItem = data => {
    const {navigate} = this.props.navigation;

    console.log('ab', data);
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.textStyle}>{data.name}</Text>
        <TouchableOpacity
          onPress={() => navigate('PokemonDetailScreen', {pokemon: data})}>
          <View style={styles.cardBackgroundStyle}>
            <Image
              source={{uri: data.image}}
              style={styles.pokemonImageStyle}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          numColumns={2}
          data={this.state.pokemonList}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}
export default PokemonList;
