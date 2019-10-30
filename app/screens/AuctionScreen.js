import { Header } from 'react-native-elements';
import Logo from './../assets/images/miltonSayegh.png';
import ApiKeys from './../services/ApiKeys';
import * as firebase from 'firebase';

import PropTypes from 'prop-types';

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';

import styles from '../screens/Styles/HomeStyles';
import TabStyles from '../screens/Styles/TabStyles';
import itemAuction from './../components/ItemAuction/styles';

import Tabs from '../components/Tabs';
//import ItemAuction from '../components/ItemAuction';

class AuctionScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      dataSource:[]
    }
  }

  async componentDidMount(){
    try {
      fetch("https://msayegh-30d8d.firebaseio.com/ms_leiloes.json")
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      }) 
    } catch (err) {
      //.catch(error=>console.log(error))
      console.log("Error fetching data-----------", err);
    }
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity>
      {item.ativo == '0' ?
      <View style={ itemAuction.container }>
          <View style={ itemAuction.descriptionContainer }>
            <View>
              <Text>Início: {item.dt_inicio}</Text>
            </View>
            <View>
              <Text>NOVO</Text>
              <Text style={ itemAuction.title }>{item.titulo}</Text>
            </View>
          </View>
      </View> : null
      }
    </TouchableOpacity>
          
  );

  render() {

    if (!firebase.apps.length) { 
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    if(this.state.loading)  {
    return (
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#000" centerComponent/>
      </View>
    )} else {
      return (
        <>
          <Header 
            centerComponent={ <Image source={ Logo } /> }
            backgroundColor= "#000"
          />
          
          <ScrollView style={styles.container}>
            <View>
              <View><Text style={styles.title}>Leilões em andamento</Text></View>
              <Tabs />
            </View>

            <View>
              <View><Text style={styles.title}>Leilões ativos</Text></View>
              
              
                <FlatList
                  data = {this.state.dataSource}
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  renderItem = {this._renderItem}
                  keyExtractor = {(item, index) => index}
                />
            </View>
          </ScrollView>
        </>
      );
    }
  }
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};

export default AuctionScreen;
