import React from 'react';
import { Header } from 'react-native-elements';
import { HeaderBackButton } from 'react-navigation';
import * as firebase from 'firebase';
import Moment from 'moment';

import {
    ScrollView,
    StatusBar,
    View,
    Button,
    Text,
    Image,
    ActivityIndicator,
    FlatList,
    TouchableHighlight
} from 'react-native';

import styles from './styles';

class Lotes extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Lotes',
        headerLeft: 
            <HeaderBackButton
                tintColor='#ffffff' onPress={() => navigation.dispatch({ type: 'Navigation/BACK' }) }
            />,
        headerBackTitle: 'Voltar',
        headerStyle: {
            backgroundColor: '#000',
            
        },
        headerTitleStyle: {
            color: '#fff',
            fontFamily: 'avenir-black'
        }
    });

    constructor() {
        super();
        this.state = {
            loading: true,
            dataSource:[]
        }
    }

    async componentDidMount(){
        try {
            fetch("https://msayegh-30d8d.firebaseio.com/ms_lotes.json")
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
        <View style={styles.containerLote}>
            <TouchableHighlight style={styles.itemLote}>
                <View>
                    <Text style={styles.titleLote}>{item.titulo}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title');
        const status = navigation.getParam('status');
        const endDate = navigation.getParam('endDate');
        const local = navigation.getParam('local');

        Moment.locale('br');

        if (!firebase.apps.length) { 
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
    
        if(this.state.loading)  {
            return (
            <View style={styles.loader}> 
                <ActivityIndicator size="large" color="#000"/>
            </View>
        )} else {

        return(
            <>

            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={ styles.mainTitle }>{title}</Text>
                    <View style={ styles.statusLeilao }>
                        <Text style={styles.callLeilao}>{status}</Text>
                    </View>
                    
                    <View style={ styles.statusBar }>
                        <View style={ styles.statusItem }>
                            <Text style={styles.call}>termina em</Text>
                            <Text style={styles.callData}>{Moment(endDate).format('DD/MM [as] H:mm')}</Text>
                        </View>
                        <View style={ styles.statusItem }>
                            <Text style={styles.call}>local</Text>
                            <Text style={styles.callData}>{local}</Text>
                        </View>
                        <View style={ styles.statusItem }>
                            <Text style={styles.call}>lotes</Text>
                            <Text style={styles.callData}>{}</Text>
                        </View>
                    </View>
                </View>
            
                <ScrollView>
                    <View>
                        <FlatList
                            data = {this.state.dataSource}
                            renderItem = { this._renderItem }
                            keyExtractor = {(item, index) => index}
                            numColumns = "2"
                        />
                    </View>
                </ScrollView>
            </View>
            </>
        )
    }
    }
}

export default Lotes;