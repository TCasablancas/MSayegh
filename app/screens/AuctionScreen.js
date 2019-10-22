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

export default function HomeScreen() {
  return (
    <View>
      <ScrollView style={styles.container}>
        
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Leilões",
};
