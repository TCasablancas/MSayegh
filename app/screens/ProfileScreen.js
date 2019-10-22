import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Constants from 'expo-constants';

import styles from './Styles/HomeStyles';
import profileStyles from './Styles/ProfileStyles';
import { 
  ScrollView, 
  View,
  Image, 
  Text,
  SectionList,
  Button
} from 'react-native';

export default function ProfileScreen() {

  const { manifest = {} } = Constants;
    const sections = [
      {
        data: [{ value: manifest.primaryColor, type: 'color' }],
        title: 'Endereço / Número / Complemento',
      },
      {
        data: [{ value: manifest.splash && manifest.splash.image }],
        title: 'CEP',
      },
      {
        data: [
          {
            value: manifest.splash && manifest.splash.backgroundColor,
            type: 'Bairro',
          },
        ],
        title: 'Cidade - UF',
      },
      {
        data: [
          {
            value: manifest.splash && manifest.splash.resizeMode,
          },
        ],
        title: 'Celular',
      },
      {
        data: [
          {
            value: manifest.ios && manifest.ios.supportsTablet ? 'true' : 'false',
          },
        ],
        title: 'Telefone Fixo',
      },
      {
        data: [
          {
            value: manifest.ios && manifest.ios.supportsTablet ? 'true' : 'false',
          },
        ],
        title: 'Senha',
      },
    ];

    _renderSectionHeader = ({ section }) => {
      return <SectionHeader title={section.title} style={{ fontSize: 32 }} />;
    };
  
    _renderItem = ({ item }) => {
      if (item.type === 'color') {
        return <SectionContent>{item.value && <Color value={item.value} />}</SectionContent>;
      } else {
        return (
          <SectionContent>
            <Text style={styles.sectionContentText}>{item.value}</Text>
          </SectionContent>
        );
      }
    };

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
        <SectionList
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={ListHeader}
          sections={sections}
        />

        
        </View>

        <View style={{ flex: 1, padding: 15, marginBottom: 40 }}>
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

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View />
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={{ fontSize: 14, marginBottom: 5, fontFamily: 'avenir-black', color: '#777' }}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return <View style={{ marginBottom: 24 }}>
            <Text style={{ fontFamily: 'avenir-roman', fontSize: 20 }}>Lorem Ipsum</Text>
          </View>;
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>{value}</Text>
        </View>
      </View>
    );
  }
};


ProfileScreen.navigationOptions = {
  //title: 'Meu Perfil',
  header: null
};
