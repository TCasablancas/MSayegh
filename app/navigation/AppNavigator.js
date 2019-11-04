import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/Login';

export default createAppContainer(
  createSwitchNavigator({
    //Login: LoginScreen,
    Main: MainTabNavigator,
    //Auction: { screen: AuctionScreen },
  })
);
