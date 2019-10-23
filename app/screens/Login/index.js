import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    AsyncStorage,
} from 'react-native';

import api from '../../services/api';
import Main from '../../screens/HomeScreen';

export default function Login() {

    state = {
        id_erro: null,
        erro: 'falha ao autenticar API',
        dados: [],
    };

    signIn = async () => {
        try {
        const response = await api.post('/auth', {
            email: 'andre@prism.com.br',
            password: '123mudar',
        });

        const { token, user } = response.data;

        await AsyncStorage.multiSet([
            ['@CodeApi:token', token],
            ['@CodeApi:user', JSON.stringify(user)],
        ]);

        this.setState({ loggedInUser: user });

        Alert.alert('Logado com sucesso!');
        } catch (err) {
        this.setState({ erro: err.data.error });
        }
    };

    // void componentDidMount() {
    //     await AsyncStorage.clear();

    //     const token = await AsyncStorage.getItem('@CodeApi:token');
    //     const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user')) || null;

    //     if (token && user) 
    //         this.setState({ loggedInUser: user });
    // }

    return (
        <View style={styles.container}>
          { !!this.state.erro && <Text>{this.state.erro}</Text> }
          { this.state.loggedInUser
            ? this.props.navigation.navigate('Main')
            : <Button onPress={this.signIn} title="Entrar" /> }
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})