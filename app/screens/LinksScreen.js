import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import styles from '../screens/Styles/Styles';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <ExpoLinksView />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Buscar',
};
