import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  View 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import ApiKeys from './services/ApiKeys';
import * as firebase from 'firebase';

import AppNavigator from './navigation/AppNavigator';

import Menu from './components/Menu';

//MARK: Importing Pages
import Login from './screens/Login/';
import Main from './screens/HomeScreen';
import Search from './screens/LinksScreen';
import Auction from './screens/AuctionScreen';
import Favourites from './screens/SettingsScreen';
import Profile from './screens/ProfileScreen';
import ProfileScreen from './screens/ProfileScreen';

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
        <StatusBar barStyle="light-content"/>
{/* 
        <Login />
        <Menu /> */}
        <AppNavigator />
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

const RootStack = createStackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
  Search: { screen: Search },
  Auction: {screen: Auction },
  Favourites: { screen: Favourites },
  Profile: { screen: ProfileScreen },
},
{
  initialRouteName:  'Login'
})

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
