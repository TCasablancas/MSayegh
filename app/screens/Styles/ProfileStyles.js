import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
      },
      containerFlex: {
        flexDirection: 'row',
      },
      
      imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f00',
        marginRight: 20,
        marginBottom: 20,
      },

      exText:{
        fontSize: 14,
        marginVertical: 0,
      },
      dataText: {
        
      },
});

module.exports = styles;