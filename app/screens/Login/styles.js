import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 60,
        backgroundColor: '#000',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'avenir-black'
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'avenir-black',
    },
    boxMainDesc: {
        marginVertical: 20, 
        paddingTop: 15, 
        borderTopColor: '#fff',
        borderTopWidth: 2,
    },
    mainDesc: {
        color: '#fff',
        fontFamily: 'avenir-roman',
        fontSize: 26,
    },
    input: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'avenir-roman',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 20,
        padding: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'avenir-black',
        textAlign: "center",
    },
    btnSignup: {
        backgroundColor: '#000',
        marginTop: 0,
        paddingVertical: 13,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff',

    },
    btnSignupText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'avenir-roman',
    },
    btnLogin: {
        backgroundColor: '#fff',
        marginTop: 30,
        paddingVertical: 13,
        borderRadius: 6,
        marginBottom: 20,
    },
    darkLabel: {
        color: '#fff',
        fontFamily: 'avenir-black',
        height: 30,
    },
    darkLabelCenter: {
        color: '#fff',
        fontFamily: 'avenir-black',
        height: 30,
        textAlign: "center",
    },
    backButton: {
        fontSize: 16,
        color: '#fff',
        position: "relative",
        fontFamily: 'avenir-black',
        marginVertical: 10,
    },
});

module.exports = styles;