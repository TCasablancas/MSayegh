import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Login from '../screens/Login';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuctionScreen from '../screens/AuctionScreen';
import HomeScreen from '../screens/HomeScreen';
import LoteScreen from '../screens/Lote';

// Login.navigationOptions = {
//   tabBarVisible: true,
//   header: null,
// }

const HomeStack = createStackNavigator(
  { Home: HomeScreen, }
);
HomeScreen.navigationOptions = {
  tabBarVisible: true,
  header: null,
}
HomeStack.navigationOptions = {
  tabBarLabel: "Início",
  tabBarIcon: ({ focused }) => (
    activeTintColor='#000',
    <TabBarIcon name="home" />
  ),
};
HomeStack.path = '';

const LinksStack = createStackNavigator(
  { Links: LinksScreen, },
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Buscar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name= "search" />
  ),
};
LinksStack.path = '';

const AuctionStack = createStackNavigator(
  {
    Settings: AuctionScreen,
  }, {
    headerMode: 'none',
  }
);
AuctionStack.navigationOptions = {
  tabBarLabel: 'Leilões',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="align-justify" />
  ),
};
AuctionStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Favoritos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="star" />
  ),
};
SettingsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
);
ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="user" />
  ),
};
ProfileStack.path = '';

const AuctionNavigation = createStackNavigator({
  Auction: AuctionScreen,
  Lote: LoteScreen,
}, {
  initialRouteName: 'Auction',
});

const tabNavigator = createBottomTabNavigator({
  //Login,
  HomeStack,
  LinksStack,
  AuctionStack,
  SettingsStack,
  ProfileStack,
}, {
  tabBarOptions: {
    style: {
      paddingTop: 6,
      backgroundColor: '#000',
      tintColor: '#fff',
    }
  },
  activeTintColor: '#f0edf6',
  animationEnabled: true,
  swipeEnabled: true,
}, {
  headerMode: 'none',
});

tabNavigator.path = '';

export default tabNavigator;
