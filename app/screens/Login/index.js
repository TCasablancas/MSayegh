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
import Main from '../../screens/HomeScreen';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';

import firebase from 'firebase'
import '@firebase/firestore';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                email: "",
                password: ""
        };
    }

    SignIn = (email, password) => {
        try {
          firebase.auth().signInWithEmailAndPassword(email, password);
          firebase.auth().onAuthStateChanged(user => {
             this.props.navigation.navigate('Main');
          })
    } catch (error) {
            console.log(error.toString(error));
        }
    };

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
                    />
                </View>

                <View>
                    <TouchableOpacity style={ styles.btnLogin } onPress={() => this.SignIn(this.state.email, this.state.password)}>
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