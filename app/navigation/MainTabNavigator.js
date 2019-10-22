import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuctionScreen from '../screens/AuctionScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  { Home: HomeScreen, }, {
    
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Início",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="home" />
  ),
};
HomeStack.path = '';

const LinksStack = createStackNavigator(
  { Links: LinksScreen, },
  config
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
  },
  config
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
  config
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
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="user" />
  ),
};
ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  AuctionStack,
  SettingsStack,
  ProfileStack,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#000',
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
