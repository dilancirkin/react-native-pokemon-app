import React, { Component } from 'react';
import {StyleSheet, View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

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
                style={{backgroundColor:'gray',width:'50%',height:70}}>
               <Text>{item.name}</Text>
               <Image source={require('')} style={{width:50,height:50,resizeMode:'contain'}}/>
            
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