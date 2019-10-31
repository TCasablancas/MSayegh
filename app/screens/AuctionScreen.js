import { Header } from 'react-native-elements';
import Logo from './../assets/images/miltonSayegh.png';
import ApiKeys from './../services/ApiKeys';
import * as firebase from 'firebase';
import Moment from 'moment';

import SegmentedControlTab from 'react-native-segmented-control-tab';

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
  FlatList,
  SegmentedControlIOS,
} from 'react-native';

import styles from '../screens/Styles/HomeStyles';
import TabStyles from '../screens/Styles/TabStyles';
import itemAuction from './../components/ItemAuction/styles';

import Tabs from '../components/Tabs';

class AuctionScreen extends React.Component {


  constructor() {
    super();
    this.state = {
      loading: true,
      dataSource:[],
      selectedIndex: 0
    }
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

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
      console.log("Error fetching data-----------", err);
    }
  }

  _renderItem = ({ item }) => (
    <View>
      <View style={ itemAuction.container }>
        <TouchableOpacity activeOpacity="1">
          <View style={ itemAuction.descriptionContainer }>

            <View>
              <Text style={ itemAuction.title }>{item.titulo}</Text>
            </View>
            <View>
              <Text style={ itemAuction.date }>{ Moment(item.dt_inicio).format('DD/MM/YYYY [as] h:mm') }</Text>
            </View>
            <View style={Object.assign({},
                      itemAuction.status,
                        ( item.ativo == "0") ? itemAuction.grayBg 
                      : ( item.ativo == "1") ? itemAuction.greenBg
                      : ( item.ativo == "2") ? "Sustado" 
                      : ( item.ativo == "3") ? temAuction.redBg 
                      : ( item.ativo == "4") ? "Em Loteamento" 
                      : null
              )}>
                <Text style={ itemAuction.statusTitle }>
                    {
                        ( item.ativo == "0") ? "Aguardando Início" 
                      : ( item.ativo == "1") ? "Em Andamento" 
                      : ( item.ativo == "2") ? "Sustado" 
                      : ( item.ativo == "3") ? "Encerrado" 
                      : ( item.ativo == "4") ? "Em Loteamento" 
                      : null
                    }
                </Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {

    const { selectedIndex, selectedIndices, customStyleIndex } = this.state;
    Moment.locale('en');

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
          <SegmentedControlTab
            values={["todos", "em andamento", "aguardando início"]}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle={{ borderColor: '#fff' }}
            tabTextStyle={{ fontFamily: 'avenir-roman', color: '#000'  }}
            activeTabStyle={{ backgroundColor: 'peru' }}
            activeTabTextStyle={{ fontFamily: 'avenir-black', marginTop: 4 }}
            tabBadgeStyle={{ color: '#000', }}
            tabsContainerStyle={{ paddingVertical: 15, paddingHorizontal: 30 }}
          />

          <ScrollView style={styles.container}>
                
                <View>
                  <Text style={styles.title}>
                    {
                      selectedIndex == 0 ? "Todos os Leilões" :
                      selectedIndex == 1 ? "Leilões em Andamento" :
                      selectedIndex == 2 ? "Leilões Encerrados" : null
                    }
                  </Text>
                </View>
                <FlatList
                  data = {this.state.dataSource}
                  renderItem = {
                    selectedIndex == 0 ? this._renderItem : null
                  }
                  keyExtractor = {(item, index) => index}
                />
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
