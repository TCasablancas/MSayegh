import { Header } from 'react-native-elements';
import Logo from './../assets/images/miltonSayegh.png';

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '../screens/Styles/HomeStyles';
import TabStyles from '../screens/Styles/TabStyles';

import Tabs from '../components/Tabs';
import ItemAuction from '../components/ItemAuction';

export default function AuctionScreen() {
  return (
    <>
      <Header 
        centerComponent={ <Image source={ Logo } /> }
        backgroundColor= "#000"
      />
      
      <ScrollView style={styles.container}>
        <View>
          <View><Text style={styles.title}>Nossos últimos leilões</Text></View>
          <Tabs />
        </View>

        <View>
          <View><Text style={styles.title}>Leilões ativos</Text></View>
          <ItemAuction style={ styles.container } />
        </View>
      </ScrollView>
    </>
  );
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};
