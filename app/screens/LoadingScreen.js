import * as Expo from 'expo';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import firebase from 'firebase';

import styles from './Styles/HomeStyles';

export default function LoadingScreen() {

    checkIfLogged = () => {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.navigation.push('Main')
        } else {
            this.props.navigation.push('Login')
        }
        })
    }

    return (
        <View style={ styles.container }>
            <ActivityIndicator size="large" style={{marginTop: 340}} />
        </View>
    );
}
