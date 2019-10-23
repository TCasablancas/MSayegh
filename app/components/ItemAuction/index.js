import React, { Components } from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './styles';
import TestImage from '../../assets/images/b8520f48ab78eb68909044652db2e57a.jpg'

export default function ItemAuction() {
    return(
        <View style={ styles.container }>
            <View style={ styles.mainImageContainer }>
                <Image source={ TestImage } style={ styles.mainImage } />
                <View style={ styles.descriptionContainer }>
                    <Text>NOVO</Text>
                    <Text>32º Leilão de Joias</Text>
                </View>
            </View>
        </View>
    );
}