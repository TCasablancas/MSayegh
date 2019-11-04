import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
    Button,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import homeStyles from './../Styles/HomeStyles';

import api from '../../services/api';
import HomeScreen from '../HomeScreen';
import AuctionScreen from './../AuctionScreen';

import Logo from './../../assets/images/miltonSayegh.png'

import { TextInput } from 'react-native-gesture-handler';
import { NavigationActions, createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'firebase'
import '@firebase/firestore';

class Login extends React.Component {

    // state = {
    //     email: '',
    //     password: '',
    //     isAuth: false,
    // };

    // login = async () => {
    //     const  { email, password } = this.state;

    //     try {
    //         const user = await firebase.auth()
    //             .signInWithEmailAndPassword(email, password);

    //         this.state({ isAuth: true });
    //         this.props.navigation.navigate('HomeScreen');
    //         console.log(user);
    //     } catch (err){
    //         console.log(err);
    //     }
    // };

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
            this.state = {
                email: "",
                password: "",
                isAuthorized: false,
        };
    }

    _SignIn = ({email, password, isAuthorized}) => {

    try {
        firebase.auth().signInWithEmailAndPassword(email, password, isAuthorized)
        firebase.auth().onAuthStateChanged(email => {
            console.log(email);
            this.state({ isAuthorized: true });
            this.props.navigation.navigate('HomeScreen')
        })
    } catch (error) {
            console.log(error.toString(error));
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.containerLogin}>
                    { this.state.errorMessage && <Text style={{color: '#fff', fontSize: 22}}>{ this.state.errorMessage }</Text> }

                    <View>
                        <Text style={ styles.darkLabel }>usuário</Text>
                        <TextInput 
                            placeholder="digite seu email cadastrado" 
                            placeholderTextColor="#666" 
                            style={ styles.input } 
                            autoCapitalize="none"
                            autoCorrect={false}
                            //onChangeText={email => this.setState({ email })}
                            //value={this.state.email}
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
                            //onChangeText={password => this.setState({ password })}    
                            //value={ this.state.password }
                        />
                    </View>

                    <View>
                        <TouchableOpacity 
                            style={ styles.btnLogin } 
                            onPress={ () => this.props.navigation.navigate('HomeScreen') }
                            //onPress={ () => this._SignIn }
                            >
                            <Text style={ styles.btnText }>entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={ styles.darkLabelCenter }>Ainda não é cadastrado?</Text>
                        <TouchableOpacity style={ styles.btnSignup }  onPress={() => this.props.navigation.push('SignUp')}>
                            <Text style={ styles.btnSignupText }>cadastrar agora</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

class SignUp extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ScrollView>
                        <Text style={styles.headerTitle}>Cadastrar Agora</Text>

                        <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                            <Text style={styles.backButton}>Voltar</Text>
                        </TouchableOpacity>

                        <View>

                            <View style={styles.boxMainDesc}>
                                <Text style={ styles.mainDesc }>Siga as instruções abaixo e inicie seu cadastro em nossa plataforma.</Text> 
                            </View>

                            <Text style={ styles.darkLabel }>nome</Text>
                            <TextInput 
                                placeholder="digite o nome de usuário que deseja" 
                                placeholderTextColor="#666" 
                                style={ styles.input } 
                                autoCapitalize="none"
                                autoCorrect={false}
                                //onChangeText={email => this.setState({ email })}
                                //value={this.state.email}
                            />
                        </View>

                        <View>
                            <Text style={ styles.darkLabel }>email</Text>
                            <TextInput 
                                placeholder="digite seu email" 
                                placeholderTextColor="#666" 
                                style={ styles.input } 
                                autoCapitalize="none"
                                autoCorrect={false}
                                //onChangeText={email => this.setState({ email })}
                                //value={this.state.email}
                            />
                        </View>

                        <View>
                            <Text style={ styles.darkLabel }>telefone</Text>
                            <TextInput 
                                placeholder="digite seu número" 
                                placeholderTextColor="#666" 
                                style={ styles.input } 
                                autoCapitalize="none"
                                autoCorrect={false}
                                //onChangeText={email => this.setState({ email })}
                                //value={this.state.email}
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
                                //onChangeText={password => this.setState({ password })}    
                                //value={ this.state.password }
                            />
                        </View>

                        <View>
                            <TouchableOpacity 
                                style={ styles.btnLogin } 
                                onPress={ this.SignIn  }>
                                <Text style={ styles.btnText }>cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const RootStack = createStackNavigator({
    Login: Login,
    SignUp: SignUp,
    HomeScreen: { screen: HomeScreen },
    Auction: { screen: AuctionScreen },
}, {
    initialRouteName: 'Login',
});
  
export default createAppContainer(RootStack);