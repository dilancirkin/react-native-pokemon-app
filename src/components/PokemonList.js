import React, { Component } from 'react';
import {StyleSheet, View,Text,FlatList,TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import styles from "./PokemonList.style.js"


class PokemonList extends Component{//extend ile react componentinin tüm özelliklerini aktardık 
    constructor(props){
        super(props)
        this.state={
            pokemonList:[],
        };
    }  
        componentDidMount(){
             axios.get('https://pokeapi.co/api/v2/pokemon')
              .then((data)=>{
                  this.setState({pokemonList:data.data.results},()=>{
                      console.log(this.state.pokemonList);
                  });
              })
              .catch((error)=>{
                  console.log(error);
              
              });
         }
    
         renderItem= ({item,navigation})=>{
             console.log('item',item);
             return(
                <View
                style={styles.cardStyle}>
               <Text>{item.name}</Text>
                <Image source={require("../../assets/pokemon.png")} 
                    style={styles.pokemonImageStyle}></Image>
            
                </View>
             );
             
         };
     
    
     render(){
         return (
             <View>
                 <FlatList
                 numColumns={2}
                 data={this.state.pokemonList}
                 renderItem={this.renderItem}
                 />
               
             </View>
         );
     }
     
    }
export default PokemonList;