import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        backgroundColor: '#e0e0e0',
        // shadowColor: '#c3c3c3',
        // shadowOffset: {
        //   width: 0,
        //   height: 10,
        // },
        // shadowOpacity: 0.9,
        // shadowRadius: 10,
        // elevation: 21,
        height: 120,
        marginVertical: 10,
        paddingTop: 10,
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
        alignItems: 'center',
    },
    title: {
        fontFamily: 'avenir-black',
        fontSize: 20,
        height: 30,
    },
    status: {
        height: 30,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#000',
        borderRadius: 23,
    },
    date:{
        fontFamily: 'avenir-black',
        fontSize: 14,
        marginBottom: 10,
        color: 'peru',
    },
    statusTitle: {
        color: '#fff',
        fontFamily: 'avenir-roman',
        textAlign: "center",
        fontSize: 16,
    },

    greenBg: {
        backgroundColor: 'limegreen',
    },
    grayBg: {
        backgroundColor: 'lightslategrey',
    },
    redBg: {

    },
    yellowBg: {

    },
    orangeBg: {

    },
});

module.exports = styles;