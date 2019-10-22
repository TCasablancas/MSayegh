import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
import Tabs from '../components/Tabs';
import TabStyles from '../screens/Styles/TabStyles';

export default function HomeScreen() {
  return (
      
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <View><Text style={styles.title}>Olá Thiago, seja bem vindo.</Text></View>
            <View style={styles.mainView}>
                <Tabs />

                <View style={styles.mainCard}>
                    <Text style={styles.textMainCard}>Próximo Leilão</Text>
                    <Text style={styles.callMainCard}>32º Leilão de Joias</Text> 
                </View>
                
                <View>
                    <Text style={styles.title}>Veja mais itens</Text>
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
