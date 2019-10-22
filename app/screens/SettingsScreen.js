import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView } from 'react-native';

export default function FavouritesScreen() {
  return (
    <ScrollView />
    // <ExpoConfigView />
  );
}

FavouritesScreen.navigationOptions = {
  title: 'Favoritos',
};
