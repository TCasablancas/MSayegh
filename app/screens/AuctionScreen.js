import { Header } from 'react-native-elements';
import Logo from './../assets/images/miltonSayegh.png';

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

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        loading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }

  render() {

    if(this.state.loading){
    return (
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#000" centerComponent/>
      </View>
    )}
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
  <Text style={styles.lightText}>{data.item.name}</Text>
  <Text style={styles.lightText}>{data.item.email}</Text>
  <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
}

AuctionScreen.navigationOptions = {
  //title: "Leilões",
  header: null
};

export default AuctionScreen;
