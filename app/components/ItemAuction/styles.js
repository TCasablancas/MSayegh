import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        backgroundColor: '#fff',
        shadowColor: '#c3c3c3',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 21,
        height: 120,
        //overflow: "hidden",
        marginVertical: 10,
    },
    mainImage: {
        height: 120,
        width: 120,
    },
    mainImageContainer: {
        width: 121,
        height: 120,
        borderRightWidth: 2,
        borderRightColor: '#f9f9f9',
    },
    descriptionContainer: {
        // marginLeft: 140,
        // height: 120,
        // width: 220,
        // zIndex: 99,
        padding: 10,
    },
    title: {
        fontFamily: 'avenir-black',
        fontSize: 16,
    },
});

module.exports = styles;