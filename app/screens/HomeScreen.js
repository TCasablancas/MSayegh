import React from 'react';
import { Header } from 'react-native-elements';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { 
  Shelf, ItemShelf, ItemImage,
  ItemTitle, ItemDesc, ItemPrice } from '../screens/Styles/MainStyles';

import styles from '../screens/Styles/Styles';
import mainStyles from '../screens/Styles/MainStyles';
import homeStyles from '../screens/Styles/HomeStyles';
import Tabs from '../components/Tabs';
import TabStyles from '../screens/Styles/TabStyles';

export default function HomeScreen() {
  return (
      <ScrollView>
        <View style={ homeStyles.container }>
          <View><Text style={homeStyles.title}>Olá Thiago, seja bem vindo.</Text></View>
            <View style={homeStyles.mainView}>
                
                <Tabs />
                
                <View style={homeStyles.mainCard}>
                    <Text style={homeStyles.textMainCard}>Próximo Leilão</Text>
                    <Text style={homeStyles.callMainCard}>32º Leilão de Joias</Text> 
                </View>
                
                <View>
                    <Text style={homeStyles.title}>Veja mais itens</Text>
                        <Shelf>
                        <ItemShelf>
                            <ItemImage 
                                source={{uri: 'https://www.sayeghtv.com.br/util/content/b44f6d75d6611bbdb6cd3934adfe1283.jpg'}} />
                            <View>
                                <Text style={ItemTitle.font}>TENDÊNCIA</Text>
                                <Text style={ItemDesc.font}>Colar de Diamante Swarovski</Text>
                                <Text style={ItemPrice.font}>R$12.900</Text>
                            </View>
                        </ItemShelf>
                        <ItemShelf>
                            <View>
                              <ItemImage />
                                <Text style={ItemTitle.font}>TENDÊNCIA</Text>
                                <Text style={ItemDesc.font}>Colar de Diamante Swarovski</Text>
                                <Text style={ItemPrice.font}>R$12.900</Text>
                            </View>
                        </ItemShelf>
                    </Shelf>
                </View>
            </View>
          </View>
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};