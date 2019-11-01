import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuctionScreen from './../screens/AuctionScreen';
import LoteScreen from './../screens/Lote';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auction: { screen: AuctionScreen },
  }),
  createStackNavigator({
    Lote: { screen: LoteScreen },
  })
);
