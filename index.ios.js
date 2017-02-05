// Code here for IOS!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () => (
  <View style={{flex: 1}}>
    {/* NOTE: this "flex: 1" says that this tag 
    should span the entire area of the device*/}
    <Header headerText={"Albums"} />
    <AlbumList/>
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


