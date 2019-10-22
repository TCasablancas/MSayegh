import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Main from '../screens/HomeScreen';
import Logo from '../assets/images/miltonSayegh.png';

export default createAppContainer(
  createSwitchNavigator({
    Main: Main,
    Main: MainTabNavigator,
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerRight: "",
        headerLeft: "",
        headerTitle: <Image source={ Logo } />,
        headerStyle: {
            backgroundColor: "#000",
            color: "#fff"
        }
    },
  })
);
