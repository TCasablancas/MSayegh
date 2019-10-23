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
      title: {
        fontSize: 26,
        fontFamily: 'avenir-black',
        
      },
      exText:{
        fontSize: 14,
        marginVertical: 0,
        fontFamily: 'avenir-black',
        color: '#777'
      },
      dataText: {
        fontSize: 20,
        fontFamily: 'avenir-roman',
        marginBottom: 15

      },
      btnAction: {
        fontSize: 20, 
        padding: 15, 
        borderWidth: 2, 
        borderRadius: 6, 
        color: '#888',
      }
});

module.exports = styles;