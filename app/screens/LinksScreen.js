import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { SearchBar, Header } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

import Logo from './../assets/images/miltonSayegh.png';

import styles from '../screens/Styles/HomeStyles';
import TabStyles from '../screens/Styles/TabStyles';

import Tabs from '../components/Tabs';

export default function LinksScreen() {

  return (
    <>
      <Header 
        centerComponent={ <Image source={ Logo } /> }
        backgroundColor= "#000"
      />
      
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
    </>
  );
}

LinksScreen.navigationOptions = {
  //title: 'Buscar',
  header: null
};
