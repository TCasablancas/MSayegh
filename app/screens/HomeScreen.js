import React from 'react';
import { Header } from 'react-native-elements';

import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { 
  Shelf, ItemShelf, ItemImage,
  ItemTitle, ItemDesc, ItemPrice } from './Styles/MainStyles';

import homeStyles from './Styles/HomeStyles';
import Tabs from '../components/Tabs';

import Logo from './../assets/images/miltonSayegh.png';
import Ring from './../assets/images/ring.png';

import Menu from './../components/Menu';
import Login from './Login';

const HomeScreen = () => {

  return (
    
      <>

      <Header 
        centerComponent={ <Image source={ Logo } /> }
        backgroundColor= "#000"
      />
      
      <ScrollView>
        <View style={ homeStyles.container }>
          <View><Text style={homeStyles.title}>Olá Thiago, seja bem vindo.</Text></View>
            <View style={homeStyles.mainView}>
                
                <View><Text style={homeStyles.title}>Estão são as novidades</Text></View>
                <Tabs />
                
                <View style={homeStyles.mainCard}>
                    <Text style={homeStyles.textMainCard}>Próximo Leilão</Text>
                    <Text style={homeStyles.callMainCard}>32º Leilão de Joias</Text>
                    <Image source={ Ring } style={ homeStyles.mainImage } /> 
                </View>
                
                <View>
                    <Text style={homeStyles.title}>Veja mais itens</Text>
                        <Shelf>
                        <ItemShelf>
                            <ItemImage 
                                source={{uri: 'https://www.sayeghtv.com.br/util/content/b44f6d75d6611bbdb6cd3934adfe1283.jpg'}} 
                                
                                />
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

      </>
  )
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;