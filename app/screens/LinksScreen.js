import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

import styles from '../screens/Styles/HomeStyles';
import TabStyles from '../screens/Styles/TabStyles';

import Tabs from '../components/Tabs';

export default function LinksScreen() {

  return (
    <ScrollView style={styles.container}>
      <View><Text style={styles.title}>Últimos itens pesquisados</Text></View>
      <Tabs />

      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value=""
        placeholder="O que você procura?"
        style={{ color: '#fff' }}
      />

      {/* <ExpoLinksView /> */}
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  //title: 'Buscar',
  header: null
};
