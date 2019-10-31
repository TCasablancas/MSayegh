import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import TabBarIcon from './../../components/TabBarIcon';
import { createAppContainer, createSwitchNavigator, createStackNavigator  } from 'react-navigation';

import HomeScreen from './../../screens/HomeScreen';
import SearchScreen from './../../screens/LinksScreen';
import AuctionScreen from './../../screens/AuctionScreen';
import FavouriteScreen from './../../screens/SettingsScreen';
import ProfileScreen from './../../screens/ProfileScreen';

const Menu = ({ navigation }) => {

        return(
            <>
            <View style={ styles.container }>
                <View style={ styles.menuBg }>
                    <TouchableOpacity style={ styles.menuItem }>
                        <TabBarIcon name="home" />
                        <Text style={ styles.menuItemText }>início</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.menuItem }>
                        <TabBarIcon name="search" />
                        <Text style={ styles.menuItemText }>buscar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={ styles.menuItem } 
                        onPress={ () => navigation.navigate('Auction') }>
                        <TabBarIcon name="align-justify" />
                        <Text style={ styles.menuItemText }>leilões</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.menuItem }>
                        <TabBarIcon name="star" />
                        <Text style={ styles.menuItemText }>favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.menuItem }>
                        <TabBarIcon name="user" />
                        <Text style={ styles.menuItemText }>perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        )
}
  
// const MenuStack = createStackNavigator({
//     Main: { screen: HomeScreen },
//     Auction: { screen: AuctionScreen },
// });

export default Menu;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginBottom: 20,
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    menuBg: {
        backgroundColor: '#000',
        height: 60,
        borderRadius: 30,
        bottom: 40,
        flexDirection: "row",
    },
    menuItem: {
        flex: 5,
        padding: 8,
    },
    menuItemText: {
        color: '#fff',
        fontFamily: 'avenir-black',
        fontSize: 10,
        textAlign: "center",
        flex: 1,
        marginBottom: -10,
    },
});
