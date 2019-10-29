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

import Tabs from '../components/Tabs';
import ItemAuction from '../components/ItemAuction';

class AuctionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
    };
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  componentDidMount(){
    fetch("https://msayegh-30d8d.firebaseio.com")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        loading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error))
  }

  readUserData() {
    firebase.database().ref('/ms_leiloes/0/cidade').once('value', function (snapshot) {
        console.log(snapshot.val())
    });
  }

  render() {

    // if(this.state.loading){
    // return (
    //   <View style={styles.loader}> 
    //     <ActivityIndicator size="large" color="#000" centerComponent/>
    //   </View>
    // )}

    if (!firebase.apps.length) { 
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    return (
      <>
        

        <Header 
          centerComponent={ <Image source={ Logo } /> }
          backgroundColor= "#000"
        />
        
        <ScrollView style={styles.container}>
          <View>
            <View><Text style={styles.title}>Nossos últimos leilões</Text></View>
            <Tabs />
          </View>

          <View>
            <View><Text style={styles.title}>Leilões ativos</Text></View>
            <ItemAuction style={ styles.container } />
          </View>
          
          <FlatList
              data= {this.state.dataSource}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem= {item=> this.renderItem(item)}
              keyExtractor= {item=>item.id.toString()}
          />
        
        </ScrollView>
      </>
    );
  }

  renderItem = (data) =>
  <TouchableOpacity style={styles.list}>
    <Text style={styles.lightText}>{data.item.cidade}</Text>
    {/* <Text style={styles.lightText}>{data.item.email}</Text>
    <Text style={styles.lightText}>{data.item.company.name}</Text> */}
  </TouchableOpacity>
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};

export default AuctionScreen;
