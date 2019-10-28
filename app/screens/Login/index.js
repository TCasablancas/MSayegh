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

import firebase from 'firebase'
import '@firebase/firestore';


function onLoginPress() {

    this.state({ error:'', loading: true });

    const{email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        this.state({ error:'', loading: false })
        this.props.navigation.navigate('Main')
    })
    .catch(() => {
        this.state({ error: 'Tivemos um problema com o login', loading: false });
    })
}

export default function Login() {
    
    this.state = {
        email: '',
        password: '',
        error: '', 
        loading: false,
    };

    return (
        <View style={styles.container}>

            { this.state.errorMessage && <Text style={{color: '#fff', fontSize: 22}}>{ this.state.errorMessage }</Text> }

            <View>
                <Text style={ styles.title }>usuário</Text>
                <TextInput placeholder="digite seu nome de usuário" placeholderTextColor="#666" style={ styles.input } />
            </View>

            <View>
                <Text style={ styles.title }>senha</Text>
                <TextInput placeholder="digite sua senha" secureTextEntry={true} placeholderTextColor="#666" style={ styles.input } />
            </View>

            <View>
                <TouchableOpacity style={ styles.btnLogin } onPress={this.signIn}>
                    <Text style={ styles.btnText }>entrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Ainda não é cadastrado?</Text>
                <TouchableOpacity style={ styles.btnLogin } onPress={this.onLoginPress}>
                    <Text style={ styles.btnText }>cadastrar agora</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
}