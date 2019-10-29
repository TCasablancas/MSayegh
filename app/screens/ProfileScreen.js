import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import styles from './Styles/HomeStyles';
import profileStyles from './Styles/ProfileStyles';
import Pic from '../assets/images/45340024_10216770067861560_1664954878432116736_n.jpg'

import { 
  ScrollView, 
  View,
  Image, 
  Text,
  SectionList,
  Button, 
  FlatList
} from 'react-native';

export default function ProfileScreen() {

  const dados = [
    {
      name: 'Rua Reims, 120 - Ap 21',
      title: 'Endereço / Número / Complemento',
    },
    {
      name: '11025-021',
      title: 'CEP',
    },
    {
      name: 'Santos - SP',
      title: 'Cidade - UF',
    },
    {
      name: '(11) 94143-3198',
      title: 'Celular',
    },
    {
      name: '(11) 4356-2392',
      title: 'Telefone Fixo',
    },
  ];

    
  return (
    <ScrollView style={ profileStyles.container }>
      <View style={ profileStyles.containerFlex }>
        <View style={ profileStyles.imageContainer }>
          <Image source={ Pic } style={ profileStyles.picture } />
          </View>
        <View style={ profileStyles.dataText }>
          <Text style={ profileStyles.title }>Thiago Augusto C. Silva</Text>
          <Text style={ profileStyles.exText }>001.037.702-67</Text>
          <Text style={ profileStyles.exText }>59.335.983-5</Text>
        </View>
      </View>

      <View style={ styles.containerData }> 
      <FlatList
        data={ dados }
        numColumns={ 1 }
        renderItem={ ({ item }) => 
          <View>
            <Text style={ profileStyles.exText }>{ item.title }</Text>
            <Text style={ profileStyles.dataText }>{ item.name }</Text>
          </View> } 
      />
      
      </View>

      <View style={{ flex: 1, padding: 15, marginBottom: 40 }}>
        <Button title="EDITAR PERFIL" />
        <Button title="TERMOS E CONDIÇÕES"
          color="#000"
        />
        <Button title="POLÍTICA DE PRIVACIDADE"
          color="#000"
        />
        <Button title="FAZER LOGOUT"
          color="#f20"
        />
      </View>
    </ScrollView>
  )
}



ProfileScreen.navigationOptions = {
  //title: 'Meu Perfil',
  header: null
};
