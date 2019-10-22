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

import styles from '../screens/Styles/Styles';

export default function AuctionScreen() {
  return (
    <View>
      <ScrollView style={styles.container}>
        
      </ScrollView>
    </View>
  );
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};
