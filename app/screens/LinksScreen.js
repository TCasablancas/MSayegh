import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

import styles from '../screens/Styles/HomeStyles';

export default function LinksScreen() {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  const { search } = this.state;

  return (


    
    <ScrollView style={styles.container}>
      
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        placeholder="O que você procura?"
        style={{ color: '#fff' }}
      />

      {/* <ExpoLinksView /> */}
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Buscar',
};
