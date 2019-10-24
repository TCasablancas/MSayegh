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

export default function Login() {

    state = {
        errorMessage: null,
    };

    signIn = async () => {
        try {
            const response = await api.post('/login', {
                email: '',
                password: '',
            });
    
            const { users, token } = response.dados;
    
            await AsyncStorage.multiSet([
                ['@sayegh:token', token],
                ['@sayegh:user', JSON.stringify(user)],
            ]);
        } catch (response) {
            this.setState({ errorMessage: response.erro })
        }
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
                <TouchableOpacity style={ styles.btnLogin } onPress={this.signIn}>
                    <Text style={ styles.btnText }>cadastrar agora</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
}