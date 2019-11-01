import Logo from './../assets/images/miltonSayegh.png';
import ApiKeys from './../services/ApiKeys';
import * as firebase from 'firebase';
import Moment from 'moment';
import { Header } from 'react-native-elements';

import apiKeys from './../services/ApiKeys';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import React, { PureComponent } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import styles from '../screens/Styles/HomeStyles';
import itemAuction from './../components/ItemAuction/styles';
import LotesScreen from './Lotes';

class AuctionScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

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
        <TouchableOpacity activeOpacity="1"  
          onPress={() => 
            this.props.navigation.navigate('Lotes',{
              title: item.titulo,
              status: item.id_status_leilao,
              endDate: item.dt_fim,
              local: item.cidade,
              //lotes: item.
            })
          }>
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
    const { selectedIndex } = this.state;
    const { navigate } = this.props.navigation;

    Moment.locale('en');

    if (!firebase.apps.length) { 
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    if(this.state.loading)  {
    return (
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#000"/>
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
            tabStyle={{ borderColor: '#fff', borderRadius: 0 }}
            tabTextStyle={{ fontFamily: 'avenir-roman', color: '#000'  }}
            activeTabStyle={{ borderBottomColor: 'peru', borderBottomWidth: 2, backgroundColor: '#fff', }}
            activeTabTextStyle={{ fontFamily: 'avenir-black', marginTop: 2, color: 'peru' }}
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
                    selectedIndex == 0 ? this._renderItem : 
                    selectedIndex == 1 ? this._renderItem :
                    selectedIndex == 2 ? this._renderItem :
                    null
                  }
                  keyExtractor = {(item, index) => index.id}
                  onEndReachedThreshold={5}
                />
          </ScrollView>

        </>
      );
    }
  }
}

class Lote extends React.Component {

  render(){
    return (
      <>
        <LoteScreen />
      </>
    )
  }
}

const MainNavigator = createStackNavigator({
  Auction: { screen: AuctionScreen },
  Lotes: { screen: LotesScreen },
});

export default createAppContainer(MainNavigator);

//export default AuctionScreen;