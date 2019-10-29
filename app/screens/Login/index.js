import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';

import styles from './styles';

import api from '../../services/api';
import Main from '../HomeScreen';
import Profile from './../ProfileScreen';

import { TextInput } from 'react-native-gesture-handler';
import { NavigationActions, createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'firebase'
import '@firebase/firestore';

export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        isAuth: false,
    };

    loogin = async () => {
        const  { email, password } = this.state;

        try {
            const user = await firebase.auth()
                .signInWithEmailAndPassword(email, password);

            this.state({ isAuth: true });
            this.props.navigation.navigate('Main');
            console.log(user);
        } catch (err){
            console.log(err);
        }
    };

    // constructor(props) {
    //     super(props);
    //         this.state = {
    //             email: "",
    //             password: ""
    //     };
    // }

    // SignIn = (email, password, navigate) => {
    //     try {
    //       firebase.auth().signInWithEmailAndPassword(email, password)
    //       firebase.auth().onAuthStateChanged(user => {
    //         console.log(email);
    //         this.props.navigation.navigate('Main')
    //       })
    // } catch (error) {
    //         console.log(error.toString(error));
    //     }
    // };

    render() {
        return (
            <View style={styles.container}>

                { this.state.errorMessage && <Text style={{color: '#fff', fontSize: 22}}>{ this.state.errorMessage }</Text> }

                <View>
                    <Text style={ styles.darkLabel }>usuário</Text>
                    <TextInput 
                        placeholder="digite seu nome de usuário" 
                        placeholderTextColor="#666" 
                        style={ styles.input } 
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </View>

                <View>
                    <Text style={ styles.darkLabel }>senha</Text>
                    <TextInput 
                        placeholder="digite sua senha" 
                        secureTextEntry={true} 
                        placeholderTextColor="#666" 
                        style={ styles.input } 
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={password => this.setState({ password })}    
                        value={ this.state.password }
                    />
                </View>

                <View>
                    <TouchableOpacity 
                        style={ styles.btnLogin } 
                        onPress={ this.login  }>
                        <Text style={ styles.btnText }>entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={ styles.darkLabelCenter }>Ainda não é cadastrado?</Text>
                    <TouchableOpacity style={ styles.btnSignup } onPress={this.onLoginPress}>
                        <Text style={ styles.btnSignupText }>cadastrar agora</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
