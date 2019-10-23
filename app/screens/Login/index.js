import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import api from '../../services/api';

export default function Login() {
//   state = { email: '', password: '', errorMessage: null }
//   handleLogin = () => {
//     // TODO: Firebase stuff...
//     console.log('handleLogin')
//   }

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
        this.setState({ errorMessage: err.data.error });
        }
    };

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          //onChangeText={email => this.setState({ email })}
          //value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          //onChangeText={password => this.setState({ password })}
          //value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          //onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
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