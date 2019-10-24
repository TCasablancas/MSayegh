import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, Image, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ApiKeys from './services/ApiKeys';
import * as firebase from 'firebase';
//import * as firebase from 'firebase/analytics';

import { Header, headerTitle, headerRight } from 'react-native-elements';
import Logo from './assets/images/miltonSayegh.png';

import AppNavigator from './navigation/AppNavigator';

import Login from './screens/Login/';

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!firebase.apps.length) { 
    firebase.initializeApp(ApiKeys.FirebaseConfig); 
    //firebase.analytics();
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
          />

      <Login />

      {/* <Header 
        centerComponent={ <Image source={ Logo } /> }
        backgroundColor= "#000"
      />
      
      <AppNavigator /> */}
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
      'avenir-roman': require('./assets/fonts/AvenirLTStd-Roman.otf'),
      'avenir-black': require('./assets/fonts/AvenirLTStd-Black.otf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
