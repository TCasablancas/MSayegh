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
  { Home: HomeScreen, },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Início",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-home' : 'home' } />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-user' : 'md-user'} />
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
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-user' : 'md-user'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-user' : 'md-user'} />
  ),
};
ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  AuctionStack,
  SettingsStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
