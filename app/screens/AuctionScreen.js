import * as WebBrowser from 'expo-web-browser';
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

export default function AuctionScreen() {
  return (
      <ScrollView style={styles.container}>
        <View>
          <View><Text style={styles.title}>Nossos últimos leilões</Text></View>
          <Tabs />
        </View>
      </ScrollView>
  );
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};
