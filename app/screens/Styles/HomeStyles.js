import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
      },
      mainView: {
        
      },
      mainViewImage: {
        height: 200
      },
      centered: {
        textAlign: "center",
      },
      headerTitle: {
        fontSize: 26,
        color: '#888',
        fontWeight: "bold",
        fontFamily: 'avenir-black',
      },
      title: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'avenir-black',
        height: 20,
        marginBottom: 10,
        
      },

      buttonWhite: {
        backgroundColor: '#fff',
        color: '#666',
        textAlign: "center",
        alignContent: "center",
        padding: 15,
        fontSize: 20,
        borderRadius: 4,
        marginVertical: 10,
        shadowColor: '#999',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13,
        elevation: 21,
      },
      mainBtnGold: {
        backgroundColor: '#b8962f',
        borderRadius: 40,
        marginVertical: 20,
        padding: 15,
        color: '#000',
        shadowColor: '#999',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 21,
      },
      loader: {
        marginTop: 200,
        alignItems: "center", 
        justifyContent: "center",
      },
      buttonEmpty: {
        backgroundColor: 'rgba(255,255,255,0)',
        textAlign: "center",
        color: '#000',
        fontSize: 20,
        borderRadius: 40,
        padding: 15,
        borderColor: '#888',
        borderWidth: 2,
      },
      btnText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
      },
      btnSoftText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: '#989898',
      },

      smallReferenceText: {
          fontSize: 11,
          textAlign: "center",
          margin: 10,
          paddingHorizontal: 20,
      },
      headerBtnContent: {
        padding: 15,
      },
      headerBtnImage: {
        width: 36,
        height: 36,
      },

      mainCard: {
        backgroundColor: '#000',
        height: 300,
        marginTop: 0,
        marginBottom: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textMainCard: {
        fontFamily: 'avenir-roman',
        textAlign: "center",
        marginVertical: 20,
        color: '#fff', 
      },
      callMainCard: {
        fontFamily: 'avenir-black',
        textAlign: "center",
        marginBottom: 20,
        fontSize: 26,
        color: '#fff',
      },
      mainImage: {
        height: 150,
        width: 150,
      },
      shelfContainer: {
        height: 200,
        marginBottom: 20,
      },

      containerData: {
        padding: 20,
        borderRadius: 6,
        backgroundColor: '#fff',
        shadowColor: '#c3c3c3',
        shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 21
      }
});

module.exports = styles;