import React from 'react';
import { Header } from 'react-native-elements';
import { HeaderBackButton } from 'react-navigation';

import {
    ScrollView,
    StatusBar,
    View,
    Button,
    Text,
    Image,
    FlatList
} from 'react-native';

import styles from './styles';

class Lote extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Lotes',
        headerLeft: 
            <HeaderBackButton
                tintColor='#ffffff' onPress={() => navigation.dispatch({ type: 'Navigation/BACK' }) }
            />,
        headerBackTitle: 'Voltar',
        headerStyle: {
            backgroundColor: '#000',
            
        },
        headerTitleStyle: {
            color: '#fff',
            fontFamily: 'avenir-black'
        }
    });

    render() {
        const { navigation } = this.props;

        return(
            <>
            <ScrollView>
                <View style={styles.container}>
                    <View><Image /></View>
                    <Text>{JSON.stringify(navigation.getParam('title'))}</Text>
                    <Text>otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))}</Text>
                </View>
            </ScrollView>
            </>
        )
    }
}

export default Lote;