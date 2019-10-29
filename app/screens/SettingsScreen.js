import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Header } from 'react-native-elements'
import { ScrollView, Image } from 'react-native';

import Logo from './../assets/images/miltonSayegh.png';

export default function FavouritesScreen() {
  return (
    <>
      <Header 
        centerComponent={ <Image source={ Logo } /> }
        backgroundColor= "#000"
      />
      <ScrollView />
    </>
  );
}

FavouritesScreen.navigationOptions = {
  //title: 'Favoritos',
  header: null
};
