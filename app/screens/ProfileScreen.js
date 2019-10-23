import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import styles from './Styles/HomeStyles';
import profileStyles from './Styles/ProfileStyles';
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
        <View style={ profileStyles.imageContainer }><Image source={{ uri: 'https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/45340024_10216770067861560_1664954878432116736_n.jpg?_nc_cat=109&_nc_oc=AQnbpN8W7jPbFAaZYrWs72KJ4KbseCO22Sh0w0YGXr95b-ojf71detrkvOGKv18_lt4&_nc_ht=scontent.fcgh5-1.fna&oh=3298c34d6aa4cbccf327fe7e8df15325&oe=5E1E9C0E' }} /></View>
        <View style={ profileStyles.dataText }>
          <Text style={ profileStyles.title }>Thiago Augusto C. Silva</Text>
          <Text style={ profileStyles.exText }>001.037.702-67</Text>
          <Text style={ profileStyles.exText }>5709591</Text>
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
